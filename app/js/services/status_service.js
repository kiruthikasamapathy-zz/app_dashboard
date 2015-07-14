angular.module("app").factory("StatusService", function($http, VERSION_CONFIG_FILE) {
  var StatusService = {
    getAll: function() {
      var promise = $http.get(VERSION_CONFIG_FILE).then(function (response) {
        return response.data;
      });
      return promise;
    }
  };
  return StatusService;
});
