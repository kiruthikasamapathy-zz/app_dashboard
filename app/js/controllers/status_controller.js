angular.module("app").controller("StatusController", function($scope, StatusResource) {
  $scope.status = StatusResource.get();

  $scope.predicate = 'id';
  $scope.reverse = false;
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };

});
