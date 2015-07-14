angular.module("app").factory("statusService", function($http, VERSION_CONFIG_FILE) {
  var statusService = {
    getAll: function() {
      var promise = $http.get(VERSION_CONFIG_FILE).then(function (response) {
        return response.data;
      });
      return promise;
    }
  };
  return statusService;
});
