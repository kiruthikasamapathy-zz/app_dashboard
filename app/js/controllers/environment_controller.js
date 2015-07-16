angular.module('app').controller('EnvironmentController', function($scope, envService) {
  envService.get_all().then(function(data) {
    $scope.environments_config = data;
  });
});
