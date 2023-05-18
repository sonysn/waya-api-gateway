/* eslint-disable no-console */
const express = require('express');
const http = require('http');

const Routes = require('./routes');

class Server {
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
  }

  /* Including app Routes starts */
  includeRoutes() {
    new Routes(this.app).routesConfig();
  }
  /* Including app Routes ends */

  startTheServer() {
    this.includeRoutes();

    const port = process.env.PORT;
    //const host = 'localhost';

    this.http.listen(port, () => {
      console.log(`Listening on Port: ${port}`);
    });
  }
}

module.exports = new Server();