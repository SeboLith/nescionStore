Template.checkout.rendered = function() {

  var domElement = $(this.firstNode);

  /* client/js/domHelpers.js */
  // foundationTooltip();

  window.scrollTo(0,0);

  // animate the loading of the items on first load and pagination
  domElement.css("opacity", 0).velocity("transition.slideUpBigIn", { delay: 1, duration: 350 });
};

CheckoutController = RouteController.extend({

  layoutTemplate: 'container',

  yieldTemplates: {
    'checkout': {
      to: 'mainSection'
    }
  },

  onBeforeAction: function () {

    this.render();
  }
});

CheckoutController.events({
  'click #order-btn': function(event, template) {

    // prevent the form from submitting
    event.preventDefault();

    var // vars
    form = $("#payment-form"),
    total = CartItems.find({customerId: Meteor.userId()}).fetch()[0].totalPrice;

    // Disable the submit button to prevent repeated clicks
    form.find('button').prop('disabled', true);

    // set your publishable key to identify your website when communicating with Stripe
    Stripe.setPublishableKey("pk_test_MVrdyGVSvBGaxCt5DC9PmbkM");

    var stripeResponseHandler = function(status, response) {

      if (response.error) {

        // Show the errors on the form
        form.find('.payment-errors').text(response.error.message);
        form.find('button').prop('disabled', false);
      } else {

        // token contains id, last4, and card type
        var token = response.id;

        // submit the form
        form.get(0).submit();

        // disable the submit button to prevent multiple submissions
        form.find('button').prop('disabled', true);

        // reset the cart variables
        varSync("cartItems", 0);
        varSync("items", '[]');
        varSync("cartTotal", 0);

        // process the payment information on the back end
        Meteor.call("ProcessStripeOrder", token, total, function (error, res) {
          if (error) {
            console.log('error: ', error);
          } else {
            varSync("paymentResponse", res);
          }
        });
      }
    };

    Stripe.card.createToken(form, stripeResponseHandler);
  }
});

CheckoutController.helpers({

  navContent: function() {

    return Session.get('navContent');
  },

  savedCartItems: function() {

    var // vars
    items = CartItems.find({customerId: Meteor.userId()}).fetch()[0],
    savedCartItems = [];

    if (items) {
      savedCartItems = items.checkoutItems.unique().arr;
      savedCartItems.map(function(obj) {
        var price = obj.currentPrice * obj.cartQuantity;
        return obj.itemTotal = price.toFixed(2);
      });
    }

    return savedCartItems;
  },

  totalPrice: function() {

    var // vars
    items = CartItems.find({customerId: Meteor.userId()}).fetch()[0],
    totalPrice = 0;

    if (items) {
      var totalPrice = CartItems.find({customerId: Meteor.userId()}).fetch()[0].totalPrice;
    }

    return totalPrice;
  },

  getCheckoutContent: function() {

    return Template[Session.get('checkoutContent')];
  }
});
