/**
 * Publications
 */

Meteor.publish('AuctionItems', function (){

  var // vars
  cursor = AuctionItems.find({}, {sort: {views: -1}});

  return cursor;
});

Meteor.publish('CartItems', function (){

  var // vars
  cursor = CartItems.find({});

  return cursor;
});

Meteor.publish('PurchaseRecords', function (){

  var // vars
  cursor = PurchaseRecords.find({});

  return cursor;
});

Meteor.publish('AuctionItemsSegment', function (query){

  var // vars
  cursor = AuctionItems.find({},
    {
      limit: query[1],
      skip: query[0],
      fields: {
        title: 1,
        condition: 1,
        details: 1,
        msrp: 1,
        currentPrice: 1,
        quantity: 1,
        description: 1,
        expirationDate: 1,
        smallSrc: 1,
        mediumSrc: 1,
        largeSrc: 1,
        startDate: 1
      },
      sort: {
        views: -1
      }
  }),
  init = true,

  handle = cursor.observeChanges({
    added: function (id, fields) {
      if (! init) {
        console.log('doc added to AuctionItems collection!');
      }
    },
    changed: function (id, fields) {

    },
    removed: function (id) {

    }
  });

  return cursor;
});

Meteor.publish('AuctionItem', function (id){

  var // vars
  cursor = AuctionItems.find({_id: id});

  return cursor;
});
