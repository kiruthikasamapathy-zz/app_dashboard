describe('application dashboard app', function () {

  describe('visiting the applications status', function () {
    beforeEach(function () {
      browser.get('/status');
      appRows = element.all(by.repeater('application in status.applications'));
    });

    it('should show me a list of apps', function() {
      expect(appRows.count()).toEqual(11);
    });
  });
});
