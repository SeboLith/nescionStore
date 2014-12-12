Template.success.rendered = function() {

  var domElement = $(this.firstNode);

  /* client/js/domHelpers.js */
  // foundationTooltip();

  window.scrollTo(0,0);

  // animate the loading of the items on first load and pagination
  domElement.css("opacity", 0).velocity("transition.slideUpBigIn", { delay: 1, duration: 350 });
};

SuccessController = RouteController.extend({

  layoutTemplate: 'container',

  yieldTemplates: {
    'success': {
      to: 'mainSection'
    }
  },

  onBeforeAction: function () {

    this.render();
  }
});

CheckoutController.helpers({

  navContent: function() {

    return Session.get('navContent');
  }
});
