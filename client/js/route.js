var app = angular.module('anupam', ['ngRoute']);
app.controller('mycontroller', function ($scope, $location, $window) {

  $scope.goreg = function () {
    $location.path('/register');
  }

  $scope.gologin = function () {
    $location.path('/login');
  }
});


app.config(function ($routeProvider) {

  $routeProvider.when('/', {
    controller: 'mycontroller',
    templateUrl: 'view/welcome.html'
  })

    .when('/register', {
      controller: 'Registercontroller',
      templateUrl: 'view/resgister.html'
    })

    .when('/dashboard', {
      controller: 'DashboardController',
      templateUrl: 'view/dashboard.html'
    })

    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'view/login.html'
    });
});
