var app = angular.module("femmoraApp", []);

app.controller("MainCtrl", function ($scope, $http) {

  $scope.cart = [];

  $http.get("http://localhost:3000/api/products")
    .then(function (res) {
      $scope.products = res.data;
    });

  $scope.addToCart = function (product) {
    $scope.cart.push(product);
  };

  $scope.total = function () {
    return $scope.cart.reduce((sum, item) => sum + item.price, 0);
  };

});