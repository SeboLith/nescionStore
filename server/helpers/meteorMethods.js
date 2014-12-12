(function () {
  Meteor.methods({

    AuctionItemsCount: function () {

      return AuctionItems.find({}).count();
    },

    UpdateEmail: function (email) {

      Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.email': email }} );
    },

    InsertCartItems: function (values) {

      CartItems.insert(values);
    },

    RemoveCartItems: function (id) {

      CartItems.remove({_id: id});
    },

    ProcessStripeOrder: function (token, total) {

      total = Math.round(Number(total*100).toFixed(2));

      var // vars
      user = Meteor.user(),
      userId = user._id,
      name = user.profile.name,
      email = user.profile.email,
      savedCart = CartItems.findOne({customerId: userId}),
      fut = new Future,

      clearItemsTableOfPurchasedItems = function() {

        // update the items table to reflect purchased items by decrementing the
        // quantity and incrementing the number sold
        for (var i = 0; i < savedCart.checkoutItems.length; i++) {
          AuctionItems.update(
            { _id: savedCart.checkoutItems[i]._id },
            { $inc: { quantity: -1, sold: 1 } }
          );
        }

        // clear the temporary saved cart
        CartItems.remove({_id: savedCart._id});
      },

      createPurchaseRecord = function (chargeDetails) {

        var // vars
        newItems = [];

        for (var i = 0; i < savedCart.checkoutItems.length; i++) {

          var newItem = {
            _id: savedCart.checkoutItems[i]._id,
            title: savedCart.checkoutItems[i].title,
            discountAmount: savedCart.checkoutItems[i].item.discountAmount
          };

          // insert select fields of the item object in the purchasedItems array of objects
          newItems.push(newItem);
        }

        // create a purchase record for the sale
        var purchaseRecordId = PurchaseRecords.insert({
          customerId: userId,
          savedCartId: savedCart._id,
          customerName: name,
          purchasedItems: newItems,
          chargeDetails: chargeDetails,
          dateAdded: savedCart.dateAdded,
          datePurchased: new Date()
        });

        clearItemsTableOfPurchasedItems();

        // set the purchaseRecordId on the fut event
        fut['return'](purchaseRecordId);
      };

      Stripe.charges.create({
          amount: total,
          currency: "usd",
          card: token,
          description: "Charge for "+name+" (ID: "+userId+")."
        },
        function(err, charge) {

          if (err) {

            console.log("There was an error processing the payment: ", err);
          } else {

            console.log("The payment was successfully processed!");

            // make asynchronous call from within the callback
            Fiber(function() {

              // perform the necessary actions associated with a purchase
              createPurchaseRecord(charge);
            }).run();
          }
        }
      );

      console.log('result from 110:: ', fut.wait());

      return fut.wait();

    } /* ProcessStripeOrder */
  }) /* Meteor.methods */

})();
