angular.module('app').controller('EnvironmentController', function($scope, envService) {

  $scope.selectedEnvsModel = [];
  envService.get_all().then(function(data) {
    $scope.environments_config = data;
    $scope.selectedEnvsModel = angular.copy(data.environments);
  });

  $scope.is_env_hidden = function(id) {
    if (envDataParserService.contains($scope.selectedEnvsModel, id)) {
      return true;
    }
    return false;
  };
  $scope.env_dropdown_settings = {
    enableSearch: true,
    displayProp: 'name',
    idProp: 'name',
    externalIdProp: ''
  };
  $scope.env_dropdown_customtexts = {
    buttonDefaultText: 'Select Envs',
    dynamicButtonTextSuffix: 'Envs',
    checkAll: 'Show All',
    uncheckAll: 'Hide All',
    searchPlaceholder: 'Search Envs',
  };

});
