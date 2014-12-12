// /**
//  * User model
//  */

Meteor.users.deny({
  update: function() {
    return true;
  }
});
