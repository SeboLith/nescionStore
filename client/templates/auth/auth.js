Template.loginIcons.rendered = function() {

  var domElement = $(".login-icon");

  $.Velocity
  .RegisterEffect("transition.flipXIn", {
    defaultDuration: 800,
    calls: [
    [ { opacity: 1, rotateY: [ 0, -55 ] } ]
    ]
  })
  .RegisterEffect("transition.flipXOut", {
    defaultDuration: 800,
    calls: [
    [ { opacity: 0, rotateY: 55 } ]
    ],
    reset: { rotateY: 0 }
  });

  // animate the loading of the items on first load and pagination
  domElement.css("opacity", 0).velocity("transition.flipXIn", { stagger: 150 });
};

Template.loginIcons.events({

  "click .login-icon": function (event, template) {

    var // vars
    thisIcon = $(event.currentTarget).find("img"),
    thisService = thisIcon.data("service");

    authenticateUser(thisService);

    // clear the login icons once an icon is clicked
    Session.set('loginIcons', "blank");

    if (thisService === "user") {

      // toggle the nav content between the login form and the blank template
      Session.set('navContent', Session.get("navContent") == "authLoginForm" ? "blank" : "authLoginForm");
    }

    // allow the login form to come into view
    setTimeout(function() {
      var // vars
      iconHolder = $(".auth-login-form .login-icon"),
      form = $(".auth-login-form");

      if (thisService === "user") {

        // set a local storage variable
        localStorage.setItem("loginService", thisService);
        form.addClass(localStorage.loginService);

        iconHolder.html("");
        iconHolder.append(thisIcon);
      }
    }, 500);

  }
});
