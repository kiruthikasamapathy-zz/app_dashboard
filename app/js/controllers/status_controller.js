angular.module("app").controller("StatusController", function($scope, $http, StatusResource,VERSION_CONFIG_FILE) {
  //$scope.status_from_service = StatusResource.get();

  $http.get(VERSION_CONFIG_FILE).success(function (data){
      $scope.status = data;
  });

  $scope.predicate = 'id';
  $scope.reverse = false;
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };

});
