angular.module("app").controller("StatusController", function($scope, $http, $filter, StatusService) {

  StatusService.getAll().then(function(data) {
    $scope.status = data;
  });

  $scope.predicate = 'id';
  $scope.reverse = false;
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };

  $scope.highlight_prod_differences = function(all_versions, current_version) {
    all_env_versions = angular.fromJson(all_versions);
    var prod_version = $filter('filter')(all_env_versions, {
      name: 'PROD'
    })[0].version;

    if (current_version < prod_version) {
      return {
        color: "red"
      };
    }
  };

});
