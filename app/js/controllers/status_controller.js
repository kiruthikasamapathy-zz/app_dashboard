// with $resource
angular.module("app").controller("StatusController", function ($scope, StatusResource) {
  // because the stubbed endpoint returns an array of results, .query() is used
  // if the endpoint returned an object, you would use .get()
  $scope.status = StatusResource.get();
});
