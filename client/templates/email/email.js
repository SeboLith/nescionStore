Template.email.rendered = function() {

};

Template.email.helpers({

  errorOne: function () {

    var // vars
    errorOne = Session.get("emailOneError");

    return errorOne;
  },

  errorTwo: function () {

    var // vars
    errorTwo = Session.get("emailTwoError");

    return errorTwo;
  },

  firstEmailErrorMessage: function () {

    var // vars
    firstEmailErrorMessage = Session.get("firstEmailErrorMessage");

    return firstEmailErrorMessage;
  },

  secondEmailErrorMessage: function () {

    var // vars
    secondEmailErrorMessage = Session.get("secondEmailErrorMessage");

    return secondEmailErrorMessage;
  }
});

Template.email.events({

  "click .email-submit": function (event, template) {

    // prevent the form from submitting
    event.preventDefault();

    var // vars
    form = $(template.firstNode).find('form'),
    emailValidated = validateEmail(form);

    // go to the checkout page
    if (emailValidated) {
      Router.go('checkout');
      $('#email-modal').foundation('reveal', 'close');
    }
  }
});
