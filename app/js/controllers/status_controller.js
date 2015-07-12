angular.module("app").controller("StatusController", function($scope, $http, $filter, StatusResource, VERSION_CONFIG_FILE) {
  //$scope.status_from_service = StatusResource.get();

  $http.get(VERSION_CONFIG_FILE).success(function(data) {
    $scope.status = data;
  });

  $scope.predicate = 'id';
  $scope.reverse = false;
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };

  $scope.set_color = function(all_versions, current_version) {

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
