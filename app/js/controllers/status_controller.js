angular.module("app").controller("StatusController", function($scope, statusService, envDataParserService, appDataParserService) {

  statusService.get_all().then(function(data) {
    $scope.status = data;
  });

  $scope.predicate = 'id';
  $scope.reverse = false;

  $scope.selectedAppsModel = [];
  $scope.is_removed_by_user = function(id) {
   if(appDataParserService.contains($scope.selectedAppsModel, id)) {
    return true;
   }
   return false;
  };

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
