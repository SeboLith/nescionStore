Template.productDetail.rendered = function() {

  var domElement = $(this.firstNode);

  /* client/js/domHelpers.js */
  foundationTooltip();

  window.scrollTo(0,0);

  // animate the loading of the items on first load and pagination
  domElement.css("opacity", 0).velocity("transition.slideUpBigIn", { delay: 1, duration: 350 });
};

DetailController = RouteController.extend({

  layoutTemplate: 'container',

  yieldTemplates: {
    'productDetail': {
      to: 'mainSection'
    }
  },

  subscriptions: function () {

    return Meteor.subscribe("AuctionItem", this.params._id);
  },

  data: function () {

    var item = AuctionItems.findOne({_id: this.params._id});

    return item;
  },

  onBeforeAction: function () {

    this.render();
  }
});

DetailController.events({

  'click .item-price .btn.green': function (element, template) {

    var item = this.data();

    var cartAction = {
      increment: 1
    };

    updateCart(item, cartAction);
  }
});

DetailController.helpers({

  navContent: function() {

    return Session.get('navContent');
  }
});
