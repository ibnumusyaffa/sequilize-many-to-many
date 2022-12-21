module.exports = (app) => {
  const router = require('express').Router();
  const invoice = require('../controllers/invoiceController');

  router.get('/', invoice.list);

  app.use(router);
};
