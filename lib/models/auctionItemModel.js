/**
* Auction Item model
*/

AuctionItemSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: false
  },
  title: {
    type: String,
    optional: false
  },
  description: {
    type: String,
    optional: true
  },
  condition: {
    type: String,
    optional: true
  },
  includes: {
    type: [String],
    optional: true
  },
  features: {
    type: [String],
    optional: true
  },
  details: {
    type: Object,
    blackbox: true,
    optional: true
  },
  msrp: {
    type: Number,
    decimal: true,
    optional: true
  },
  currentPrice: {
    type: Number,
    decimal: true,
    optional: true
  },
  quantity: {
    type: Number,
    optional: true
  },
  views: {
    type: Number,
    optional: true
  },
  sold: {
    type: Number,
    optional: true
  },
  smallSrc: {
    type: String,
    optional: true
  },
  mediumSrc: {
    type: String,
    optional: true
  }
});

AuctionItems = new Meteor.Collection("auctionItems", {

  // add computed properties to document
  transform: function (doc) {

    // add an item object to the document
    doc.item = (function () {

      var // vars
      discountAmount = doc.msrp - doc.currentPrice,
      discountPercent = 100 * (1 - (doc.currentPrice / doc.msrp)),
      inStock = doc.quantity > 0 ? ['in-stock', '', 'green', true] : ['out-of-stock', 'disabled', 'grey', false],
      refurbished = doc.condition == 'Refurbished' ? true : false;

      return {
        discountAmount: discountAmount.toFixed(2),
        discountPercent: +discountPercent.toFixed(2),
        inStock: inStock[0],
        disabled: inStock[1],
        add: inStock[2],
        available: inStock[3],
        refurbished: refurbished
      }

    })();

    // return manipulated document
    return doc;
  }
});

AuctionItems.attachSchema(AuctionItemSchema);

AuctionItems.allow({
  insert: function() {
    return isAdminById(Meteor.userId());
  },
  update: function() {
    return isAdminById(Meteor.userId());
  },
  remove: function() {
    return isAdminById(Meteor.userId());
  }
});

AuctionItems.deny({
  insert: function() { return true; },
  update: function() { return true; },
  remove: function() { return true; }
});
