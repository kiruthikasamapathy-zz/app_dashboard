describe('Factory: envDataParserService', function() {

  var service;
  beforeEach(angular.mock.module("app"));

  beforeEach(angular.mock.inject(function($injector) {
    service = $injector.get('envDataParserService');
  }))

describe('Parse and get prod version', function() {

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

describe('Contains:', function() {

  it('should return true if input contains the id', function() {
    var search_id = "app 2";
    var input = [{
      id: "app 1"
    }, {
      id: "app 2"
    }];
    expect(service.contains(input, search_id)).toBe(true);
  });

  it('should return false if input contains the id', function() {
    var search_id = "other id";
    var input = [{
      id: "app 1"
    }];
    expect(service.contains(input, search_id)).toBe(false);
  });

  it('should return false if input is not well formed', function() {
    var search_id = "other id";
    var input = [{
      noid: "app 1"
    }];
    expect(service.contains(input, search_id)).toBe(false);
  });

  it('should return false if input is not exactly matching', function() {
    var search_id = "app 12";
    var input = [{
      id: "app 1"
    }];
    expect(service.contains(input, search_id)).toBe(false);
  });

  it('should return false if input is empty', function() {
    var search_id = "other id";
    var input = [];
    expect(service.contains(input, search_id)).toBe(false);
  });

  it('should return false if input is null', function() {
    var search_id = "other id";
    var input = null;
    expect(service.contains(input, search_id)).toBe(false);
  });
 });
});
