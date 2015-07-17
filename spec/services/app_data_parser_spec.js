describe('Factory: appDataParserService', function() {

  var service;
  beforeEach(angular.mock.module("app"));

  beforeEach(angular.mock.inject(function($injector) {
    service = $injector.get('appDataParserService');
  }))

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
