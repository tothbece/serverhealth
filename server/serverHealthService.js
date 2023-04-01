const express = require('express');   // for web services

/**
 * Simple webservice providing information about the server.
 */
class ServerHealthService {
  constructor(app) {
    this.app = app || express(); // receiving mocked object or creating new express application
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
}

module.exports = ServerHealthService;
