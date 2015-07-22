angular.module("app").factory("statusService", function($http, VERSION_CONFIG_FILE) {
 var status_data;
 var statusService = {
  get_all: function() {
   var url = VERSION_CONFIG_FILE;
   return $http.get(url).then(function(response) {
    status_data = response.data;
    return status_data;
   });
  },
  get_cache: function() {
   return status_data != null ? status_data : get_all();
  }
 };
 return statusService;
});
