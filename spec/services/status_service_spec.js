describe("Service: StatusService", function() {
  var statusService, httpBackend;
  var response = "application versions";
  var statusUrl = "/status";

  beforeEach(module("app"));

  beforeEach(angular.mock.module("app", function($provide) {
    $provide.constant("VERSION_CONFIG_FILE", statusUrl);
  }));

  beforeEach(inject(function(_statusService_, $httpBackend) {
    statusService = _statusService_;
    httpBackend = $httpBackend;
  }));

  it("should get platform versions", function() {
    httpBackend.whenGET(statusUrl).respond(response);
    statusService.get_all().then(function(data) {
      expect(data).toEqual(response);
    });
  });

  afterEach(function() {
    httpBackend.flush()
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

});
