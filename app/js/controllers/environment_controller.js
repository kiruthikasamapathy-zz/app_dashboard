angular.module('app').controller('EnvironmentController', function($scope, EnvService) {
  EnvService.getAll().then(function(data) {
    $scope.environments_config = data;
  });
});
