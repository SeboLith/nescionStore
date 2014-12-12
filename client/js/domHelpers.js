// DOM Helpers

/**
 * BROWSER DETECTION
 * ~~~~~~~~~~~~~~~~~
 */

// isMobileDevice = {
//   Android: function() {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function() {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function() {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function() {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function() {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function() {
//     return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//   }
// };


/**
 * ARRAY HELPERS
 * ~~~~~~~~~~~~~
 */

 Array.prototype.instances = function ( needle ) {
  var instances = [];

  for (var i = 0; i < this.length; i++) {
    if(this[i]._id === needle._id) {
      instances.push(needle);
    }
  }
  return instances;
}

// cart items

Array.prototype.contains = function(needle) {
  for (var i = 0; i < this.length; i++) {
    if(this[i]._id === needle._id) return true;
  }
  return false;
};

Array.prototype.unique = function() {

  var // vars
  arr = [],
  obj = {};

  // loop through this array
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }

  // loop through this array
  for (var i = 0; i < this.length; i++) {

    if (arr.contains(this[i])) {

      obj[this[i]._id] += this[i]._id+" ";
    }
  }

  for (key in obj) {

    var str = obj[key];
    str = str.replace('undefined', '').trim();
    var array = str.split(" ");

    obj[key] = array;
  }

  for (var i = 0; i < arr.length; i++) {
    var itemNums = obj[arr[i]._id].length;
    arr[i].cartQuantity = itemNums;
    arr[i].itemTotal = arr[i].cartQuantity * arr[i].currentPrice;
  }

  return {
    arr: arr,
    obj: obj
  }
};

/**
 * Foundation tooltip initiator
 */
foundationTooltip = function () {
  $(document).foundation({
    tooltip: {
      selector : '.has-tip',
      additional_inheritable_classes : [],
      tooltip_class : '.tooltip',
      touch_close_text: 'tap to close',
      disable_for_touch: false,
      tip_template : function (selector, content) {
        return '<span data-selector="' + selector + '" class="'
        + Foundation.libs.tooltip.settings.tooltip_class.substring(1)
        + '">' + content + '<span class="nub"></span></span>';
      }
    }
  });
};

/**
 * Foundation Orbit initiator
 */
foundationOrbit = function () {
  $(document).foundation({
    orbit: {
      animation: 'slide',
      timer_speed: 5000,
      pause_on_hover: true,
      resume_on_mouseout: true,
      animation_speed: 500,
      navigation_arrows: true,
      bullets: true,
      slide_number: false
    }
  });
  $(window).resize();
};

$(document).on('close', '[data-reveal]', function () {
  var modal = $(this);

  syncCartItemsToDb();
});


/**
 * ANIMATE LOGIN LINK
 * ~~~~~~~~~~~~~~~~~~
 */

animateLoginLink = function () {
  var // vars
  link = $('#auth-login');

  setTimeout(function(){
    link.toggle("highlight");
    link.toggle("highlight");
    link.toggle("highlight");
    link.toggle("highlight");
    link.toggle("highlight");
    link.toggle("highlight");
  },800);
};


/**
 * USER AUTHENTICATION
 * ~~~~~~~~~~~~~~~~~~~
 */

authenticateUser = function (service) {

  switch (service) {
    case "github":

      Meteor.loginWithGithub({
        requestPermissions: []
      }, function (err) {
      if (err) {
          console.log('Error logging in with Github: ' + err);
        } else {
          console.log('Logged in with Github!');
        }
      });
      break;
    case "facebook":

      Meteor.loginWithFacebook({
        requestPermissions: []
      }, function (err) {
        if (err) {
          console.log('Error logging in with Facebook: ' + err);
        } else {
          console.log('Logged in with Facebook!');
        }
      });
      break;
    case "twitter":

      Meteor.loginWithTwitter({
        requestPermissions: ['name']
      }, function (err) {
        if (err) {
          console.log('Error logging in with Twitter: ' + err);
        } else {
          console.log('Logged in with Twitter!');
        }
      });
      break;
    case "linkedin":
      break;
    case "gplus":

      Meteor.loginWithGoogle({
        requestPermissions: ['email']
      }, function (err) {
        if (err) {
          console.log('Error logging in with Google Plus: ' + err);
        } else {
          console.log('Logged in with Google Plus!');
        }
      });
      break;
    case "user":
      break;
  }
};


/**
 * EMAIL VALIDATION
 * ~~~~~~~~~~~~~~~~
 */

validateEmail = function (form) {

  var // vars
  emailOne = form.find('#first-email'),
  emailTwo = form.find('#second-email'),
  firstEmail = emailOne.val(),
  secondEmail = emailTwo.val(),
  isValidFirstEmail,
  isValidSecondEmail;

  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  isValidFirstEmail = emailRegex.test(firstEmail);
  isValidSecondEmail = emailRegex.test(secondEmail);

  if (!isValidFirstEmail) {
    varSync('emailOneError', 'error');
    varSync('firstEmailErrorMessage', 'Please enter a valid email');
  } else {
    varSync('emailOneError', '');
    varSync('firstEmailErrorMessage', '');
  }

  if (!isValidSecondEmail) {
    varSync('emailTwoError', 'error');
    varSync('secondEmailErrorMessage', 'Please enter a valid email');
  } else {
    varSync('emailTwoError', '');
    varSync('secondEmailErrorMessage', '');
  }

  if (isValidFirstEmail && isValidSecondEmail) {
    if (firstEmail === secondEmail) {
      varSync('emailOneError', '');
      varSync('firstEmailErrorMessage', '');
      varSync('emailTwoError', '');
      varSync('secondEmailErrorMessage', '');

      // call the meteor method UpdateEmail to insert the email value
      Meteor.call('UpdateEmail', firstEmail, function (error, response) {
        if (error) {
          console.log('error: ', error);
        }
      });

      return true;
    } else {
      varSync('emailOneError', 'error');
      varSync('firstEmailErrorMessage', 'The emails do not match');
      varSync('emailTwoError', 'error');
      varSync('secondEmailErrorMessage', 'The emails do not match');
    }
  }

  emailOne.val('');
  emailTwo.val('');

  return false;
};


/**
 * CART UPDATE
 * ~~~~~~~~~~~
 */

updateItemQuantity = function (self, event) {

  var // vars
  itemId = self._id,
  $this = $(event.originalEvent.target),
  item = AuctionItems.findOne({_id: itemId}),
  elem = $("select#select-"+itemId),
  availableQuantity = elem.data('quantity');

  elem.each(function () {

    // off() prevents event from firing multiple times
    elem.off().on('change', function () {

      var // vars
      value = elem.val();
      cartAction = {
        increment: 0,
        update: Number(value)
      };

      updateCart(item, cartAction);

      // // remove focus from the dropdown
      elem.blur();
    });
  });
};


/**
 * CART DB SYNC
 * ~~~~~~~~~~~~
 */

syncCartItemsToDb = function () {

  var // vars
  user = Meteor.user();
  customerId = Meteor.userId();
  items = JSON.parse(localStorage.items),
  totalPrice = 0,
  itemIds = [],
  checkoutItems = [],

  findItem = function(id) {

    var item = AuctionItems.findOne({_id: String(id)});

    checkoutItems.push(item);
  };

  // if there are items in the cart
  if (items.length && user) {

    itemIds = items.map(function (obj) {

      findItem(obj._id);
      totalPrice += obj.currentPrice;
      return obj._id;
    });

    var // vars
    seedValues = {
      customerId: customerId,
      checkoutItems: checkoutItems,
      totalPrice: totalPrice.toFixed(2),
      dateAdded: new Date()
    },
    savedCart;

    // check if there is a saved cart for the customer
    savedCart = CartItems.findOne({customerId: customerId});

    if (savedCart) {

      // clear the saved cart and add a new one
      Meteor.call('RemoveCartItems', savedCart._id, function (error, response) {
        if (error) {
          console.log('error: ', error);
        }
      });
      Meteor.call('InsertCartItems', seedValues, function (error, response) {
        if (error) {
          console.log('error: ', error);
        }
      });
    }

    // else, replace the current items in the db with the new items
    else {

      // insert a saved cart
      Meteor.call('InsertCartItems', seedValues, function (error, response) {
        if (error) {
          console.log('error: ', error);
        }
      });
    }
  }

  // if there are no items in the cart
  else {

    // check if there is a saved cart for the customer
    var savedCart = CartItems.findOne({customerId: customerId});

    if (savedCart) {

      // clear the saved cart
      Meteor.call('RemoveCartItems', savedCart._id, function (error, response) {
        if (error) {
          console.log('error: ', error);
        }
      });
    }
  }
};


/**
 * PROFILE PICTURE
 * ~~~~~~~~~~~~~~~
 */

toggleProfilePic = function () {

  var profileContent = $('.profile-content');

  if ( profileContent.css('visibility') == 'hidden' ) {
    profileContent.removeClass('hide');
    profileContent.velocity("transition.slideDownIn", { duration: 350 });
  }
  else {
    profileContent.addClass('hide');
  }
};

dateProperFormat = function (date) {
  return date.format("dd-m-yy");
};

initSync = function (varName, value) {

  var lcItem = localStorage.getItem(varName);

  // initialize the local storage variable
  if (lcItem == null) {
    localStorage.setItem(varName, value);
    lcItem = localStorage.getItem(varName);
  }

  // synchronize the session variable with its local storage counterpart
  Session.set(varName, lcItem);
};

varSync = function (varName, value) {

  var lcItem = localStorage.getItem(varName);

  // set the local storage variable
  localStorage.setItem(varName, value);

  // synchronize the session variable with its local storage counterpart
  Session.set(varName, localStorage.getItem(varName));
};

/**
 * runs within the context of a pagination click event
 */
paginateItems = function (event, collectionName, collectionCount, itemsOnPage) {

  var // vars
  skipVal = "skip"+collectionName+"Value",
  page = "current"+collectionName+"Page",
  skipValue = Session.get(skipVal),
  itemsPerPage = itemsOnPage,
  totalPages = Math.round(collectionCount % itemsPerPage === 0 ? collectionCount / itemsPerPage : Math.floor(collectionCount / itemsPerPage) + 1),
  clickedLi = event.target,
  clickedLiText = $(clickedLi).text(),
  pageNum = Number(clickedLiText),
  isPageNum = !isNaN(pageNum),
  isNavButton = isNaN(pageNum),
  currentPage;

  // set a session variable
  if (isPageNum) {
    currentPage = pageNum;
    // set a session variable
    Session.set(page, currentPage);
    Session.set(skipVal, (currentPage - 1) * itemsPerPage);

  } else if (isNavButton) {
    if (clickedLiText === "« Previous") {

      currentPage = (skipValue / itemsPerPage) < 1 ? 1 : (skipValue / itemsPerPage);
      Session.set(page, currentPage);

      // set the new skip value
      var newSkipValue = skipValue - itemsPerPage < 0 ? 0 : skipValue - itemsPerPage;
      Session.set(skipVal, Math.round(newSkipValue));

    } else if (clickedLiText === "Next »") {

      currentPage = (skipValue + itemsPerPage) / itemsPerPage > totalPages ? totalPages : (skipValue + itemsPerPage) / itemsPerPage;

      if (currentPage != totalPages) {

        Session.set(page, currentPage + 1);
      }

      // set the new skip value
      var newSkipValue = skipValue + itemsPerPage > ((totalPages - 1) * itemsPerPage) ? (totalPages - 1) * itemsPerPage : skipValue + itemsPerPage;
      Session.set(skipVal, Math.round(newSkipValue));
    }
  }
}

removeFromCart = function (item_id, domElement) {

  var // vars
  items = JSON.parse(localStorage.items),
  cartTotal = 0,
  itemsInCart,
  cartItems,

  calculateCartTotal = function () {

    for (var i = 0; i < items.length; i++) {
      cartTotal += items[i].currentPrice;
    };
  };

  // get the number of count of this item in the cart
  itemsInCart = items.filter(function (obj) {
    return obj._id == item_id;
  });

  // decrement cart items by the number of instances of this item
  cartItems -= itemsInCart.length;

  // clear the items array of this item
  items = items.filter(function (obj) {
    return obj._id !== item_id;
  });

  // set the new number of cart items
  cartItems = items.length;

  calculateCartTotal();

  // animate the loading of the items on first load and pagination
  domElement.velocity("fadeOut", { delay: 100, duration: 600 });

  // give the velocity effect time to shine :)
  setTimeout(function() {
    varSync("cartItems", cartItems);
    varSync("items", JSON.stringify(items));
    varSync("cartTotal", cartTotal);
  }, 700);
};

updateCart = function (item, cartAction) {

  var // vars
  items = JSON.parse(localStorage.items),
  cartTotal = 0,
  thisItemArray = 0,
  thisItemNums = 0,
  newItems = [],
  cartItems,

  calculateCartTotal = function () {

    for (var i = 0; i < items.length; i++) {
      cartTotal += items[i].currentPrice;
    };
  },

  updateCartQuantity = function () {

    calculateCartTotal();

    varSync("cartItems", cartItems);
    varSync("items", JSON.stringify(items));
    varSync("cartTotal", cartTotal);
  };


  /* UPDATE CART ITEMS */

  if (cartAction.increment) {
    var itemsInCart = items.instances(item).length;

    if (itemsInCart < item.quantity) {

      items.push(item);

      items.instances(item);

      // update the cartQuantity attribute of each object
      items.map(function (obj) {

        if (obj._id == item._id) {
          // update the cartQuantity attribute on the item
          obj.cartQuantity = itemsInCart;
        }

        return obj;
      });

      // set the new number of cart items
      cartItems = items.length;

      updateCartQuantity();

      itemsInCart = items.instances(item).length;

      // make the relevent option selected
      $("#select-"+item._id).val(itemsInCart);
    }


  } else {

    if (cartAction.update <= item.quantity) {

      // store the new count of this item
      thisItemNums = cartAction.update;

      // decrement cart items by the number of instances of this item
      cartItems -= items.instances(item).length;

      // increment cart items by the selected value of this item
      cartItems += thisItemNums;

      // clear the items array of this item
      items = items.filter(function (obj) {
        return obj._id !== item._id;
      });

      // update the cartQuantity attribute on the item
      item.cartQuantity = cartAction.update;

      // populate items array with the updated quantity
      for (var i = 0; i < cartAction.update; i++) {
        items.push(item);
      }

      // set the new number of cart items
      cartItems = items.length;

      updateCartQuantity();
    }
  }
};
