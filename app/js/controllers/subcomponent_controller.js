angular.module("app").controller("SubcomponentController", function($scope, statusService, appDataParserService, envDataParserService, subcomponentService) {

 $scope.get_subcomponent_data = function() {
  app_id = subcomponentService.get_app_id();
  env_id = subcomponentService.get_env_id();

  versions_data = statusService.get_cache();
  app_data = appDataParserService.get_by_app(versions_data.applications, app_id);
  angular.forEach(app_data, function(attr) {
   app_data_env = attr.environments;
  });

  env_data = envDataParserService.get_by_env(app_data_env, env_id);
  angular.forEach(env_data, function(attr) {
   subcomponents_data = attr.subcomponents;
  });

  return subcomponents_data;
 };

});
