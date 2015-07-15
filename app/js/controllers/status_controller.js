angular.module("app").controller("StatusController", function($scope, statusService, envDataParserService) {

  statusService.getAll().then(function(data) {
    $scope.status = data;
  });

  $scope.predicate = 'id';
  $scope.reverse = false;
  
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };

  $scope.highlight_prod_differences = function(all_versions, current_version) {
    var prod_version = envDataParserService.get_prod_version(all_versions);
    if (current_version < prod_version) {
      return {
        color: "red"
      };
    }
  };

});
