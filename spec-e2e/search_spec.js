describe('application dashboard app', function() {

  describe('visiting the applications status', function() {
    beforeEach(function() {
      browser.get('/status');
      appRows = element.all(by.repeater('application in status.applications'));
    });

    var expectApps = function(expectedApps, key) {
      element.all(by.repeater(key + ' in status.applications').column(key + '.id')).then(function(arr) {
        arr.forEach(function(wd, i) {
          expect(wd.getText()).toMatch(expectedApps[i]);
        });
      });
    };

    it('should search across all fields when filtering with a string', function() {
      var searchText = element(by.model('searchText'));
      searchText.clear();
      searchText.sendKeys('li');
      expectApps(['Assurance - Tivoli', 'Billing'], 'application');

      searchText.clear();
      searchText.sendKeys('12');
      expectApps(['PNI'], 'application');
    });
    
  });
});
