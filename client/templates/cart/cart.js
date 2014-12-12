Template.cart.rendered = function() {

  var // vars
  cartProduct = this.find("#cart-products"),
  cartProducts = $(cartProduct).find(".cart-product"),
  itemTotals = $(cartProduct).find(".itemTotal"),
  cartTotal = 0;

  // loop through each product list item
  cartProducts.each(function(index) {

    var // vars
    itemInstance = $(this),
    itemQuantity = itemInstance.find(".cartQuantity").val(),
    select = itemInstance.find(".item-select"),
    selectOptions = select.find(".quantity-option");

    // match the value of the option to the item quantity
    selectOptions.each(function(index) {

      var // vars
      option = $(this),
      optionVal = option.val();

      if (itemQuantity == optionVal) {
        option.prop('selected', true);;
      }
    });
  });

  // loop through each product list item
  itemTotals.each(function(index) {
    var // vars
    itemTotal = $(this).val();
    cartTotal += Number(itemTotal);
  });

  varSync("cartTotal", cartTotal);
};

Template.cart.helpers({

  button: function () {
    var button = {};

    if (Meteor.user()) {
      button.color = 'green';
    } else {
      button.color = 'grey';
    }

    return button;
  },

  items: function () {

    var // vars
    items = JSON.parse(Session.get("items")),
    uniqueItems = items.length ? items.unique().arr: [];

    return uniqueItems;
  },

  cartTotal: function () {

    var // vars
    cartTotal = Number(Session.get("cartTotal")).toFixed(2);

    return cartTotal;
  },

  cartValue: function () {

    var // vars
    cartItems = Number(Session.get("cartItems"));

    return cartItems;
  }
});

Template.cart.events({

  "click a": function (event, template) {

    // close the cart modal
    $('#cart-modal').foundation('reveal', 'close');
  },

  "click #checkout-btn": function (event, template) {

    // close the cart modal
    $('#cart-modal').foundation('reveal', 'close');

    // if the current user is logged in and
    // there is an email associated with the user, go to the checkout page
    if (Meteor.user() && Meteor.user().profile.email) {
      Router.go('checkout');
    }

    // if the current user is logged in and
    // there is not an email associated with the user, go to the email modal
    else if (Meteor.user() && !Meteor.user().profile.email) {
      $('#email-modal').foundation('reveal', 'open');
    }

    // if the current user is not logged in, animate the login link
    else if (!Meteor.user()) {
      animateLoginLink();
    }
  },

  "click select.item-select": function (event, template) {

    updateItemQuantity(this, event);
  },

  "touchstart select.item-select": function (event, template) {

    updateItemQuantity(this, event);
  },

  "click .btn-red.remove-item": function (event, template) {

    var // vars
    $_id = this._id,
    parentElement = $(template.firstNode),
    domElement = parentElement.find(".cart-product.item-"+$_id);

    fetchItem = function (callback) {

      // call removeFromCart as a callback to ensure item id is ready
      callback($_id, domElement);

    };

    fetchItem(removeFromCart);
  }
});
