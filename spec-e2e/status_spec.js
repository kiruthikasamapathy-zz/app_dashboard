describe('application dashboard app', function () {

  describe('visiting the applications status', function () {
    beforeEach(function () {
      browser.get('/status');
      appData = element.all(by.repeater('application in status.applications'));
      environmentsData = element.all(by.repeater('env in environments_config.environments'));
    });

    it('should show me a list of apps', function() {
      expect(appData.count()).toEqual(11);
    });

    it('should show me all enviornments in the header', function() {
      expect(environmentsData.count()).toEqual(6);
    });

  });
});
