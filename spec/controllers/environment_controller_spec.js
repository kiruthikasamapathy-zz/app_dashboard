describe('Controller: EnvironmentController', function() {
 var scope, defer, envService;
 var env_config_data = {
  "environments": [{
   "name": "SIT1"
  }, {
   "name": "CVT"
  }]
 };

 beforeEach(function() {
  var mockEnvService = {};
  module("app", function($provide) {
   $provide.value('envService', mockEnvService);
  });

  inject(function($q) {
   mockEnvService.data = env_config_data;

   mockEnvService.get_all = function() {
    defer = $q.defer();
    defer.resolve(this.data);
    return defer.promise;
   };

  });
 });

 beforeEach(inject(function($controller, $rootScope, _envService_) {
  scope = $rootScope.$new();
  envService = _envService_;

  $controller('EnvironmentController', {
   $scope: scope,
   envService: envService
  });
  scope.$digest();
 }));

 describe("Data Load:", function() {
  it('should contain environments config at startup', function() {
   expect(scope.environments_config).toEqual(env_config_data);
  });

  it('should contain environments selection dropdown settings', function() {
   expect(scope.env_dropdown_settings.enableSearch).toBe(true);
   expect(scope.env_dropdown_settings.externalIdProp).toBeDefined();
  });

  it('should contain environments selection dropdown custom text settings', function() {
   expect(scope.env_dropdown_customtexts.buttonDefaultText).toBeDefined();
   expect(scope.env_dropdown_customtexts.dynamicButtonTextSuffix).toBeDefined();
   expect(scope.env_dropdown_customtexts.searchPlaceholder).toBeDefined();
  });
 });
});
