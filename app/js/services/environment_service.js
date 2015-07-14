angular.module("app").factory("EnvService", function($http, ENV_CONFIG_FILE) {
  var EnvService = {
    getAll: function() {
      var promise = $http.get(ENV_CONFIG_FILE).then(function (response) {
        return response.data;
      });
      return promise;
    }
  };
  return EnvService;
});
