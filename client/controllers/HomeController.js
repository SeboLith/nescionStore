HomeController = RouteController.extend({

  layoutTemplate: 'container',

  yieldTemplates: {
    'home': {
      to: 'mainSection'
    }
  },

  action: function () {
    this.render();
  }
});
