angular.module("app").factory('envDataParserService', function($filter) {
  var envDataParserService = {
    get_prod_version: function(all_versions) {
      prod_env = [];
      all_env = angular.fromJson(all_versions);
      prod_env = $filter('filter')(all_env, {
        name: "PROD"
      });
      return prod_env != null && prod_env.length > 0 ? prod_env[0].version : "";
    }
  };
  return envDataParserService;
});
