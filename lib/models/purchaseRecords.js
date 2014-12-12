/**
* Purchase Record model
*/

PurchaseRecordsSchema = new SimpleSchema({
  customerId: {
    type: String,
    optional: false
  },
  savedCartId: {
    type: String,
    optional: false
  },
  customerName: {
    type: String,
    optional: false
  },
  purchasedItems: {
    type: [Object],
    blackbox: true,
    optional: false
  },
  chargeDetails: {
    blackbox: true,
    type: Object,
    optional: false
  },
  dateAdded: {
    type: Date,
    optional: false
  },
  datePurchased: {
    type: Date,
    optional: false
  }
});

PurchaseRecords = new Meteor.Collection("purchaseRecords", {

  // add computed properties to document
  // transform: function (doc) {
  // }
});

PurchaseRecords.attachSchema(PurchaseRecordsSchema);

PurchaseRecords.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return false;
  }
});
