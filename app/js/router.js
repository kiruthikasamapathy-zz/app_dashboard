angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/app-status', {
    templateUrl: 'status.html'
  });

  $routeProvider.otherwise({ redirectTo: '/app-status' });

});
