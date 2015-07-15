angular.module("app").factory('envDataParserService', function($filter) {
  var envDataParserService = {
    get_prod_version: function(all_versions) {
      all_env_versions = angular.fromJson(all_versions);
      var prod_version = $filter('filter')(all_env_versions, {
        name: 'PROD'
      })[0].version;
      return prod_version;
    }
  };
  return envDataParserService;
});
