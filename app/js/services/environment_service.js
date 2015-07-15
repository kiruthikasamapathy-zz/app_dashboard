angular.module("app").factory("EnvService", function($http, ENV_CONFIG_FILE) {
  var EnvService = {
    getAll: function() {
      var url = ENV_CONFIG_FILE;
      return $http.get(url).then(function (response) {
        return response.data;
      });
    }
  };
  return EnvService;
});
