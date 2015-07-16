describe('Controller: StatusController', function() {
  var scope,defer, statusService, envDataParserService;
  var prod_version = 10;
  var all_versions = "versions mock data";

  beforeEach(function() {
    var mockStatusService = {};
    var mockEnvDataParserService = {};
    module("app", function($provide) {
      $provide.value('statusService', mockStatusService);
      $provide.value('envDataParserService', mockEnvDataParserService);
    });

    inject(function($q) {
      mockStatusService.data = [{
        "name": "SIT1",
        "version": 1
      }, {
        "name": "SIT2",
        "version": 1
      }];

      mockStatusService.get_all = function() {
        defer = $q.defer();
        defer.resolve(this.data);
        return defer.promise;
      };

      mockEnvDataParserService.get_prod_version = function() {
        return prod_version;
      };

    });
  });

  beforeEach(inject(function($controller, $rootScope, _statusService_, _envDataParserService_) {
    scope = $rootScope.$new();
    statusService = _statusService_;
    envDataParserService = _envDataParserService_;

    $controller('StatusController', {
      $scope: scope,
      statusService: statusService,
      envDataParserService: envDataParserService
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

  it('should have default sort predicate set', function() {
      expect(scope.predicate).toBe('id');
  });

  it('should have default sort order set', function() {
      expect(scope.reverse).toBeFalsy();
  });

  it('should highlight the version when it is less than prod version', function() {
    var current_version = prod_version-1;
    var highlightColor = scope.highlight_prod_differences(all_versions, current_version);
    expect(highlightColor).toEqual({
      color: 'red'
    });
  });

  it('should not highlight the version when it is greater than prod version', function() {
    var current_version = prod_version+1;
    var highlightColor = scope.highlight_prod_differences(all_versions, current_version);
    expect(highlightColor).not.toEqual({
      color: 'red'
    });
  });

  it('should not highlight the version when it is same as the prod version', function() {
    var current_version = prod_version;
    var highlightColor = scope.highlight_prod_differences(all_versions, current_version);
    expect(highlightColor).not.toEqual({
      color: 'red'
    });
  });
});
