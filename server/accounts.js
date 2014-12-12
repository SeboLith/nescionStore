Accounts.onCreateUser(function(options, user) {

  var // vars
  services = user.services;

  if (services.google) {

    var // vars
    profile = {
      email: services.google.email,
      name: services.google.name,
      avatar_url: services.google.picture
    };

    user.profile = profile;

  } else if (services.github) {

    var // vars
    accessToken = services.github.accessToken,
    profile,
    result = Meteor.http.get('https://api.github.com/user', {
      params: {
        'access_token': accessToken,
      },
      headers: {
        "User-Agent": "Nescion Store on Meteor"
      }
    });

    profile = _.pick(result.data,
      "login",
      "name",
      "avatar_url",
      "url",
      "company",
      "blog",
      "location",
      "email",
      "bio",
      "html_url"
    );

    user.profile = profile;
  } else if (services.facebook) {

    var // vars
    accessToken = services.facebook.accessToken,
    profile,
    data,
    result = Meteor.http.get('https://graph.facebook.com/'+services.facebook.id, {
      params: {
        'access_token': accessToken,
        'fields': 'picture'
      },
      headers: {
        "User-Agent": "Nescion Store on Meteor"
      }
    });

    data = JSON.parse(result.content);

    profile = {
      name: services.facebook.name,
      avatar_url: data.picture.data.url
    };

    user.profile = profile;
  } else if (services.twitter) {

    var // vars
    profile = {
      name: options.profile.name,
      avatar_url: services.twitter.profile_image_url
    };

    user.profile = profile;
  }

  return user;
});

Accounts.onLogin(function(userData) {

  // var // vars
  // user = userData.user,
  // services = user.services;

  // if (services.google) {
  //   console.log('Google :::', services.google);
  // } else if (services.facebook) {
  //   console.log('Facebook :::', services.facebook);
  // } else if (services.twitter) {
  //   console.log('Twitter :::', services.twitter);
  // }

  return userData;
});
