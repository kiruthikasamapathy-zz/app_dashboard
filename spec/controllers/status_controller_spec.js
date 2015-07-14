describe('Controller: StatusController', function() {
  var scope, statusService, $filter;

  beforeEach(function() {
    var mockStatusService = {};
    module("app", function($provide) {
      $provide.value('statusService', mockStatusService);
    });

    inject(function($q) {
      mockStatusService.data = [{
        "name": "SIT1",
        "version": 1
      }, {
        "name": "SIT2",
        "version": 1
      }];

      mockStatusService.getAll = function() {
        var defer = $q.defer();
        defer.resolve(this.data);
        return defer.promise;
      };
    });
  });

  beforeEach(inject(function($controller, $rootScope, _$filter_, _statusService_) {
    scope = $rootScope.$new();
    $filter = _$filter_;
    statusService = _statusService_;

    $controller('StatusController', {
      $scope: scope,
      $filter: $filter,
      statusService: statusService
    });

    scope.$digest();
  }));

  it('should contain status information at startup', function() {
    expect(scope.status).toEqual([{
      name: 'SIT1',
      version: 1
    }, {
      name: 'SIT2',
      version: 1
    }]);
  });

  // it('should create new libraries and append it to the list', function() {
  //   // We simulate we entered a new library name
  //   scope.newItemName = "Durandal";
  //
  //   // And that we clicked a button or something
  //   scope.highlight_prod_differences(all_version, current_version);
  //
  //   scope.$digest();
  //
  //   var lastLibrary = scope.libraries[scope.libraries.length - 1];
  //
  //   expect(lastLibrary).toEqual({
  //     id: 4,
  //     name: 'Durandal'
  //   });
  // });

  // it('should redirect us to a library details page', function() {
  //   spyOn($location, 'path');
  //
  //   var aLibrary = scope.libraries[0];
  //
  //   // We simulate we clicked a library on the page
  //   scope.goToDetails(aLibrary);
  //
  //   expect($location.path).toHaveBeenCalledWith('/libraries/0/details');
  // });
});
