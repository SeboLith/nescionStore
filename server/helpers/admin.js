isAdmin = function(user) {
  if (!user || typeof user === 'undefined') {
    return false;
  } else {

    // typecast the isAdmin property to a Boolean
    return !!user.isAdmin;
  }
};

isAdminById = function(userId) {
  var user;
  user = Meteor.users.findOne(userId);
  return user && isAdmin(user);
};
