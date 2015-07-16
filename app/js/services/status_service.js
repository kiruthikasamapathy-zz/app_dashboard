angular.module("app").factory("statusService", function($http, VERSION_CONFIG_FILE) {
  var statusService = {
    get_all: function() {
      var url = VERSION_CONFIG_FILE;
      return $http.get(url).then(function (response) {
        return response.data;
      });
    }
  };
  return statusService;
});
