Template.topSlider.rendered = function() {

  /* client/js/domHelpers.js */
  foundationOrbit();
};

Template.topSlider.helpers({

  navContent: function() {

      return Session.get('navContent');
    }
});
