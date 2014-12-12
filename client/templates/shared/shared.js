
Meteor.startup(function() {

  // initialize the sync of local storage variables session variables
  initSync("cartItems", 0);

  initSync("items", '[]');

  initSync("cartTotal", 0);

  initSync("emailOneError", '');

  initSync("emailTwoError", '');

  initSync("firstEmailErrorMessage", '');

  initSync("secondEmailErrorMessage", '');

  Session.setDefault('loginIcons', "blank");

  Session.setDefault('navContent', "blank");

  // console.log('Meteor version: ', Meteor.release);


  return SEO.config({
    title: 'Nescion Store - Proof of Concept',
    meta: {
      'name': 'viewport',
      'content': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    },
    meta: {
      'name': 'description',
      'content': "Online shopping from the biggest local selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else."
    }
  });
});

Template.authLoginForm.rendered = function() {

  var domElement = $(".auth-login-form");

  // animate the loading of the items on first load and pagination
  domElement.css("opacity", 0).velocity("fadeIn", {duration: 800});
};

Template.topNav.helpers({

  cartItems: function () {

    var cartItems = Session.get("cartItems");

    return cartItems;
  },

  getLoginIcons: function() {

    return Template[Session.get('loginIcons')];
  },

  getNavContent: function() {

    return Template[Session.get('navContent')];
  }
});

Template.topNav.events({

  "click .my-cart a": function (event, template) {

    var // vars
    selects = $('.cart-item-detail select');

    if (selects.length) {

      selects.each(function() {

        var // vars
        select = $(this),
        itemId = select.data('item-id'),
        item = AuctionItems.findOne({_id: String(itemId)}),
        options = select.find('option');

        options.each(function() {
          if ($(this).val() > item.quantity) {
            $(this).prop('disabled', true);
          }
        });
      });
    }
  },

  "click #auth-login": function (event, template) {

    var domElement = $(".auth-login-form");

    if (domElement.length == 0) {
      // toggle the nav content between the login form and the blank template
      Session.set('loginIcons', Session.get('loginIcons') == 'loginIcons' ? 'blank' : 'loginIcons');
    } else {
      // toggle the nav content between the login form and the blank template
      Session.set('navContent', 'blank');
    }
  },

  "click .profile-pic": function (event, template) {

    toggleProfilePic();
  },

  "click #auth-logout": function (event, template) {

    Meteor.logout(function (err) {
      if (err) {
        console.log('There was a problem logging out: ', err);
      }
    });
  }
});
