describe("Service: EnvService", function () {
  var envService, httpBackend;
  var response = "environemnts";
  var envUrl = "/environemnts";

  beforeEach(module("app"));

  beforeEach(angular.mock.module("app", function ($provide) {
      $provide.constant("ENV_CONFIG_FILE", envUrl);
  }));

  beforeEach(inject(function (_envService_, $httpBackend) {
    envService = _envService_;
    httpBackend = $httpBackend;
  }));

  it("should get environemnts data", function () {
    httpBackend.whenGET(envUrl).respond(response);
    envService.get_all().then(function(data) {
      expect(data).toEqual(response);
    });
    httpBackend.flush();
  });

});
