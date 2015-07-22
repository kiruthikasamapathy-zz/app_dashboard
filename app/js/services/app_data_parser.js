angular.module("app").factory('appDataParserService', function($filter) {
 var appDataParserService = {
  contains: function(input, id) {
   all_data = angular.fromJson(input);
   filtered_data = $filter('filter')(all_data, {
    id: id
   }, true);
   return filtered_data != null && filtered_data.length > 0 ? true : false;
  },
  get_by_app: function(input, id) {
   all_data = angular.fromJson(input);
   filtered_data = $filter('filter')(all_data, {
    id: id
   });
   return filtered_data;
  }
 };
 return appDataParserService;
});
