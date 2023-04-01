const express = require('express'); // for web services
const os = require("os");

// enable Cross Origin Resource Sharing
const cors = require("cors");
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

/**
 * Simple webservice providing information about the server.
 */
class ServerHealthService {

  constructor(app) {
    this.app = app || express(); // receiving mocked object or creating new express application
    this.app.use(cors(corsOptions));
    this.app.get('/status', this.getStatus.bind(this));
  }



  /**
   * Starting the webserver.
   * @param port The port number the server listens to.
   */
  start(port) {
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }

  /**
   *
   * @param req Request object
   * @param res Response object
   */
  getStatus(req, res) {
    const status = {
      cpuUsage: process.cpuUsage(),
      freeMemory: os.freemem(),
      totalMemory: os.totalmem(),
      uptime: process.uptime()
    };
    res.json(status);
  }
}

module.exports = ServerHealthService;
