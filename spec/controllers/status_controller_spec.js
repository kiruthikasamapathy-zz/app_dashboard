describe('Controller: StatusController', function() {
 var scope, defer, statusService, envDataParserService, appDataParserService;
 var prod_version = 10;
 var all_versions = "versions mock data";

 beforeEach(function() {
  var mockStatusService = {};
  var mockEnvDataParserService = {};
  var mockAppDataParserService = {};
  module("app", function($provide) {
   $provide.value('statusService', mockStatusService);
   $provide.value('envDataParserService', mockEnvDataParserService);
   $provide.value('appDataParserService', mockAppDataParserService);
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

   mockAppDataParserService.contains = function() {
    return true;
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

 describe("Data Load:", function() {
  var apps = [{
   name: 'SIT1',
   version: 1
  }, {
   name: 'SIT2',
   version: 1
  }];

  it('should contain status information at startup', function() {
   expect(scope.status).toEqual([{
    name: 'SIT1',
    version: 1
   }, {
    name: 'SIT2',
    version: 1
   }]);
  });

  it('should select all apps to be displayed by default', function() {
   // expect(scope.selectedAppsModel).toEqual(apps);
  });

  it('should contain application selection dropdown settings', function() {
   expect(scope.app_dropdown_settings.enableSearch).toBe(true);
   expect(scope.app_dropdown_settings.externalIdProp).toBeDefined();
  });

  it('should contain application selection dropdown custom text settings', function() {
   expect(scope.app_dropdown_customtexts.buttonDefaultText).toBeDefined();
   expect(scope.app_dropdown_customtexts.dynamicButtonTextSuffix).toBeDefined();
   expect(scope.app_dropdown_customtexts.searchPlaceholder).toBeDefined();
  });
 });

 describe("Sort:", function() {
  it('should have default sort predicate set', function() {
   expect(scope.predicate).toBe('id');
  });

  it('should have default sort order set', function() {
   expect(scope.reverse).toBeFalsy();
  });
 });

 describe("Highlight any deviation from baseline:", function() {
  it('should highlight the version when it is less than prod version', function() {
   var current_version = prod_version - 1;
   var highlightColor = scope.highlight_prod_differences(all_versions, current_version);
   expect(highlightColor).toEqual({
    color: 'red'
   });
  });

  it('should not highlight the version when it is greater than prod version', function() {
   var current_version = prod_version + 1;
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

 describe("Customizations:", function() {
  it('should return false if the app is hidden by the user', function() {
   scope.selectedAppsModel = [{
    id: "app 1"
   }];
   expect(scope.is_app_hidden("app 1")).toBe(false);
  });
 });
});
