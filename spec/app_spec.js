describe("DashboardApp: Modules", function() {
  describe("App Module:", function() {

    var module;
    beforeEach(function() {
      module = angular.module("app");
    });

    it("should be registered", function() {
      expect(module).not.toEqual(null);
    });

    describe("Dependencies:", function() {

      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };
      beforeEach(function() {
        deps = module.value("app").requires;
      });

      it("should have ngResource as a dependency", function() {
        expect(hasModule('ngResource')).toEqual(true);
      });

      it("should have ngRoute as a dependency", function() {
        expect(hasModule('ngRoute')).toEqual(true);
      });
    });
  });
});
