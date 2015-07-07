angular.module("app").factory("StatusResource", function($q, $resource) {
  return $resource('/status');
});
