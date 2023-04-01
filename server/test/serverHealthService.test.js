const expect = require('chai').expect;  // assert lib
const sinon = require('sinon');         // mocking lib
const ServerHealthService = require('../serverHealthService');

describe('ServerHealthService', () => {
  describe('#start', () => {
    it('should start the server on the specified port', () => {
      const app = {
        listen: sinon.spy()             // mocking
      };
      const service = new ServerHealthService(app);
      const port = 3000;
      service.start(port);
      expect(app.listen.calledWith(port)).to.be.true;
    });
  });
});
