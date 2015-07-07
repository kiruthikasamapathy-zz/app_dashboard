/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {
  drawRoutes: function(app) {
    app.get('/status', function (req, res) {
      res.json(
        {"applications":[{"id":"Fulfilment","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"Assurance - Remedy","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"Assurance - Tivoli","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"3.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"Assurance - T&D","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"iB2B","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"Billing","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"PNI","environments":[{"name":"SIT1","version":"12.2"},{"name":"SIT2","version":"12.2"},{"name":"SIT3","version":"12.2"},{"name":"PROD","version":"12.2"},{"name":"PSUP","version":"12.5"},{"name":"CVT","version":"12.2"}]},{"id":"ELMS","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"WWM","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"WFM","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]},{"id":"Ericcson","environments":[{"name":"SIT1","version":"1.2"},{"name":"SIT2","version":"1.2"},{"name":"SIT3","version":"1.2"},{"name":"PROD","version":"1.2"},{"name":"PSUP","version":"1.2"},{"name":"CVT","version":"1.2"}]}]}
      );
    });
  }
};
