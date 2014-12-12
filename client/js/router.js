Router.onBeforeAction("loading");

Router.map(function () {

  this.route('home', {
    path: '/',
    controller: "HomeController"
  });

  this.route('productDetail', {
    path: '/products/:_id',
    controller: "DetailController"
  });

  this.route('checkout', {
    path: '/checkout',
    controller: "CheckoutController"
  });

  this.route('success', {
    path: '/success',
    controller: "SuccessController"
  });
});
