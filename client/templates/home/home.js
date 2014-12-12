var // vars
collectionName = "AuctionItems",
itemsPerPage = collectionName+"ItemsPerPage",
collectionCount = collectionName+"Count",
collectionSegment = collectionName+"Segment",
thisPage = "current"+collectionName+"Page",
skipValue = "skip"+collectionName+"Value",
itemsLoaded = collectionName+"Loaded";

// the skip value
Session.setDefault(skipValue, 0);
Session.setDefault(thisPage, 1);
// the number of items per page
Session.set(itemsPerPage, 6);

// runs whenever its contents change
Deps.autorun(function () {
  // get the number of items in the collection
  Meteor.call(collectionCount, function (error, response) {

    if (error) {
      console.log('error: ', error);
    }
    // store the number of items in the collection
    Session.set(collectionCount, response);
  });

  Session.set(itemsLoaded, false);

  // subscribe to a record set
  Meteor.subscribe(collectionSegment, [Session.get(skipValue), Session.get(itemsPerPage)], function onReady () {
    Session.set(itemsLoaded, true);
  });

  Meteor.subscribe('CartItems');

  Meteor.subscribe('PurchaseRecords');
});

Template.searchResults.helpers({

  items: function () {

    var items = AuctionItems.find().fetch().reverse();

    return items;
  },

  auctionItemsLoaded: function () {
    return Session.get(itemsLoaded);
  }
});

Template.itemContainer.rendered = function() {

  var domElement = $(this.firstNode);

  // animate the loading of the items on first load and pagination
  domElement.css("opacity", 0).velocity("transition.slideUpBigIn", { delay: 1, duration: 350 });
}

Template.pagination.helpers({

  // populate the pagination nav with the page numbers
  pages: function () {

    var // vars
    items = Session.get(itemsPerPage),
    totalPages = Session.get(collectionCount) / items,
    pagesArray = [],
    i;

    for (i = 0; i < totalPages; i++) {
      pagesArray[i] = {page: i + 1};
    }

    return pagesArray;
  },

  isCurrent: function () {
    return Session.get(thisPage) === this.page ? 'current' : '';
  },

  noPrev: function () {

    var currentPage = Math.round(Session.get(thisPage));

    return currentPage === 1 ? 'unavailable' : '';
  },

  noNext: function () {
    var
    items = Session.get(itemsPerPage),
    currentPage = Math.round(Session.get(thisPage)),
    totalPages = Math.round(Session.get(collectionCount) % items === 0 ? Session.get(collectionCount) / items : Math.floor(Session.get(collectionCount) / items) + 1);

    return currentPage === totalPages ? 'unavailable' : '';
  }
});

Template.pagination.events({

  "click .auctionItems.pagination li": function (event, instance) {

    var // vars
    collectionTotal = Session.get(collectionCount),
    items = Session.get(itemsPerPage);

    /* client/js/domHelpers.js */
    paginateItems(event, collectionName, collectionTotal, items);
  }
});
