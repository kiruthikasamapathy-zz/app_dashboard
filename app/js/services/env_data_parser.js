angular.module("app").factory('envDataParserService', function($filter) {
  var envDataParserService = {
    get_prod_version: function(all_versions) {
      all_env = angular.fromJson(all_versions);
      prod_env = $filter('filter')(all_env, {
        name: "PROD"
      }, true);
      return prod_env != null && prod_env.length > 0 ? prod_env[0].version : "";
    },
    contains: function(input,search_query) {
      filtered_data = $filter('filter')(angular.fromJson(input), {
        name : search_query
      }, true);
      return filtered_data != null && filtered_data.length > 0 ? true : false;
    }
  };
  return envDataParserService;
});
