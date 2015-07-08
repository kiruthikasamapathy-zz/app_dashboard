angular.module("app").controller("ConstantController", ['$scope', 'environments',
    function($scope, environments) {
      $scope.environments_config = environments;
}]);
