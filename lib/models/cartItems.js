/**
* Cart Items model
*/

CartItemsSchema = new SimpleSchema({
  customerId: {
    type: String,
    optional: false
  },
  checkoutItems: {
    type: [Object],
    blackbox: true,
    optional: false
  },
  totalPrice: {
    type: Number,
    decimal: true,
    optional: false
  },
  dateAdded: {
    type: Date,
    optional: false
  }
});

CartItems = new Meteor.Collection("cartItems", {

  // add computed properties to document
  transform: function (doc) {

    // return the number of items in the cart
    doc.count = (function () {

      return doc.checkoutItems.length;
    })();

    // return manipulated document
    return doc;
  }
});

CartItems.attachSchema(CartItemsSchema);

CartItems.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});
