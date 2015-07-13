describe('application dashboard app', function() {

  describe('visiting the applications status', function() {
    beforeEach(function() {
      browser.get('/status');
      appRows = element.all(by.repeater('application in status.applications'));
    });

    var expectApps = function(expectedApps) {
      element.all(by.repeater('application in status.applications').column('application.id')).then(function(arr) {
        arr.forEach(function(wd, i) {
          expect(wd.getText()).toMatch(expectedApps[i]);
        });
      });
    };

    it('should be ordered by application name', function() {
      expectApps(['Assurance - Remedy','Assurance - T&D','Assurance - Tivoli','Billing','ELMS','Ericcson','Fulfilment','iB2B','PNI','WFM','WWM']);
    });
  });
});
