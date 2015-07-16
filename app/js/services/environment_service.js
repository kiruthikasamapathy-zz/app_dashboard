angular.module("app").factory("envService", function($http, ENV_CONFIG_FILE) {
  var envService = {
    get_all: function() {
      var url = ENV_CONFIG_FILE;
      return $http.get(url).then(function (response) {
        return response.data;
      });
    }
  };
  return envService;
});
