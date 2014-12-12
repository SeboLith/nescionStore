Meteor.startup(function () {
  Fiber = Npm.require('fibers');
  Future = Npm.require('fibers/future');
  Stripe = StripeAPI("sk_test_T5QA2PsYVdyQLsPvJQJac1I7");
});


isProdEnv = function () {
  if (process.env.ROOT_URL == "http://localhost:3000/") {
    return false;
  } else {
    return true;
  }
};


/* REMOVE EXISTING SERVICES */
/*--------------------------*/

// if a service already exists for github, remove it
ServiceConfiguration.configurations.remove({
  service: "github"
});

// if a service already exists for twitter, remove it
ServiceConfiguration.configurations.remove({
  service: "twitter"
});

// if a service already exists for google, remove it
ServiceConfiguration.configurations.remove({
  service: "google"
});

// if a service already exists for facebook, remove it
ServiceConfiguration.configurations.remove({
  service: "facebook"
});


if (isProdEnv()) {

  /* PROD CREDS */
  /*------------*/

  // insert a new github service
  ServiceConfiguration.configurations.insert({
    service: "github",
    clientId: "1f98a98ab62ffbe5e51a",
    secret: "094ea926402bb6fd7014d34d2bc4800078248a89"
  });

  // insert a new facebook service
  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '312754218921154',
    secret: '57a766ac450869fee69a87cd2474e827'
  });

  // insert a new twitter service
  ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: 'DlKBK9oKMINw7QHArmkwKXZZC',
    secret: 'PS5OvaTmNrEHXqe6T2TyjoL05IBq6aNboFObTWUMvHrwuqeHMv'
  });

  // insert a new google plus service
  ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: '11197594113-tm81rghumkjea61lofk7m2e7io6l2rg9.apps.googleusercontent.com',
    secret: 'zYFB_XXIEG2pO8SkolZ0UeaO'
  });
} else {

  console.log("//// Running in development environment /////");

  /* DEV CREDS */
  /*-----------*/

  // insert a new github service
  ServiceConfiguration.configurations.insert({
    service: "github",
    clientId: "900755abce0d061417e1",
    secret: "3e8a81eea19af62c0ac16c5c813eaabc1050d279"
  });

  // insert a new facebook service
  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '859494014071738',
    secret: 'f8733ca8870c477d4808ad9e00692cf4'
  });

  // insert a new twitter service
  ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: 'iwpA1Qqq3q9ZeH6j2qxiMkaD5',
    secret: 'MyM8RDaYSZNgENKKgBTiN1uTGrg1P1ApcuPUSbaVa6mf2eFHXg'
  });

  // insert a new google plus service
  ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: '1049876410305-rg32i1jlpb7qsumhi67nk3tgbt4felo8.apps.googleusercontent.com',
    secret: '3cBkDhZCi8zMSBxJbexeFbfm'
  });
}
