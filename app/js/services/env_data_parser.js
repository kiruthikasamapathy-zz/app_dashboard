angular.module("app").factory('envDataParserService', function($filter) {
  var envDataParserService = {
    get_prod_version: function(all_versions) {
      //all_versions ='{ "environments" : [ { "name" : "PROD", "version" : "3" } ] }';
      console.log(all_versions);
      all_env_versions = angular.fromJson(all_versions);
      var prod_version = $filter('filter')(all_env_versions, {
        name: 'PROD'
      })[0].version;
      console.log("prod_version " + prod_version);
      return prod_version;
    }
  }
  return envDataParserService;
});
