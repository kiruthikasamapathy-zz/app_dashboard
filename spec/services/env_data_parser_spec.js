describe('Factory: envDataParserService', function() {

  var service;
  beforeEach(angular.mock.module("app"));

  beforeEach(angular.mock.inject(function($injector) {
    service = $injector.get('envDataParserService');
  }))

  it('should return prod version', function() {
    var prod_version = 1.2;
    var all_versions = [{
      name: "DEV",
      version: "111"
    }, {
      name: "PROD",
      version: prod_version
    }];
    expect(service.get_prod_version(all_versions)).toBe(prod_version);
  });

  it('should return empty if prod version is not available', function() {
    var all_versions = [{
      name: "PRO",
      version: 1.21
    }];
    expect(service.get_prod_version(all_versions)).toBe("");
  });

  it('should return empty if prod version is not exactly matching', function() {
    var all_versions = [{
      name: "PROD1",
      version: 1.21
    }];
    expect(service.get_prod_version(all_versions)).toBe("");
  });

  it('should return empty if input is not well formed', function() {
    var all_versions = [{
      noname: "PROD",
      version: 1.21,
    }];
    expect(service.get_prod_version(all_versions)).toBe("");
  });

  it('should return empty if input is not of expected format', function() {
    var all_versions = [{
      noname: "PROD",
      version: 1.21
    }];
    expect(service.get_prod_version(all_versions)).toBe("");
  });

  it('should return empty if input is empty', function() {
    var all_versions = [];
    expect(service.get_prod_version(all_versions)).toBe("");
  });

  it('should return empty if input is null', function() {
    var all_versions = null;
    expect(service.get_prod_version(all_versions)).toBe("");
  });

});
