angular.module('app').controller('EnvironmentController', function($scope, envService) {
  envService.get_all().then(function(data) {
    $scope.environments_config = data;
  });

  $scope.selectedEnvModel = [];
  $scope.is_env_hidden = function(id) {
    if (envDataParserService.contains($scope.selectedEnvModel, id)) {
     console.log("env removed")
      return true;
    }
    return false;
  };
  $scope.dropdown_settings = {
    enableSearch: true,
    displayProp: 'name',
    idProp: 'name'
  };
  $scope.dropdown_customtexts = {
    buttonDefaultText: 'Select Envs',
    dynamicButtonTextSuffix: 'Envs',
    checkAll: 'Show All',
    uncheckAll: 'Hide All',
    searchPlaceholder: 'Search Envs',
  };

});
