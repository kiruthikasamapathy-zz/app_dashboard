angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/s', {
    templateUrl: 'status.html'
  });

  $routeProvider.otherwise({ redirectTo: '/s' });

});
