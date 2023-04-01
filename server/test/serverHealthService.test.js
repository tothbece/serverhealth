const expect = require('chai').expect;  // assert lib
const sinon = require('sinon');         // mocking lib
const ServerHealthService = require('../serverHealthService');

describe('ServerHealthService', () => {
  describe('#start', () => {
    it('should start the server on the specified port', () => {
      const app = {
        listen: sinon.spy(),             // mocking
        get: sinon.spy(),
        use: sinon.spy()
      };
      const service = new ServerHealthService(app);
      const port = 3000;
      service.start(port);
      expect(app.listen.calledWith(port)).to.be.true;
    });
  });
  describe('#getStatus', () => {
    it('should be called when accessing /status GET endpoint', () => {
      const app = {
        get: sinon.spy(),
        use: sinon.spy()
      };
      const service = new ServerHealthService(app);

      expect(app.get.calledWith('/status')).to.be.true;
      expect(app.get.calledOnce).to.be.true;
      expect(app.get.firstCall.args[1].name).to.equal("bound getStatus");
    });

    it('should return server health information', () => {
      const req = {};
      const res = {
        json: sinon.spy()
      };
      const serverHealthService = new ServerHealthService();
      serverHealthService.getStatus(req, res);
      expect(res.json.calledOnce).to.be.true;
      const status = res.json.firstCall.args[0];
      expect(status).to.be.an('object');
      expect(status).to.have.all.keys('cpuUsage', 'freeMemory', 'totalMemory', 'uptime');
    });
  });
});
