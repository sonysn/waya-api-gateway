const httpProxy = require('express-http-proxy');

const WayaPayments = httpProxy(process.env.WAYA_PAYMENT_SERVER_URL);

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    //TODO MY CHANGE
    this.app.post('/charge', (req, res) => {
     WayaPayments(req, res);
    });
    this.app.get('/callback', (req, res) => {
     WayaPayments(req, res);
    });

    //get balance
    this.app.post('/getbalance', (req, res) => {
     WayaPayments(req, res);
    });

    //transfers
    this.app.post('/tranferTodrivers', (req, res) => {
     WayaPayments(req, res);
    });
    this.app.post('/transferToUsers', (req, res) => {
     WayaPayments(req, res);
    });

    //paystack routes
    this.app.post('/chargeDriver', (req, res) => {
     WayaPayments(req, res);
    });
    this.app.get('/callbackdriver', (req, res) => {
     WayaPayments(req, res);
    });

    //get balance
    this.app.post('/getbalancedriver', (req, res) => {
     WayaPayments(req, res);
    })

    //transfers
    this.app.post('/tranfertodriver', (req, res) => {
     WayaPayments(req, res);
    });
  }

  routesConfig() {
    this.appRoutes();
  }
}

module.exports = Routes;
