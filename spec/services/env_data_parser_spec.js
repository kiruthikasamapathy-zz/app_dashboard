describe('Factory: envDataParserService', function() {

  var service;
  beforeEach(angular.mock.module("app"));

  beforeEach(angular.mock.inject(function($injector) {
    service = $injector.get('envDataParserService');
  }))

  it('should return prod version', function() {
    var all_versions = { "name" : "PROD", "version" : 1.2 };
    expect(service.get_prod_version(all_versions)).toBe("test");
  });
});
