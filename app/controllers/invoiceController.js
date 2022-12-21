const models = require('../models');
exports.list = async (req, res, next) => {
  try {
    let invoices = await models.Invoice.findAll({
      include: [
        {
          model: models.InvoiceClient,
          as: 'invoice_client',
          include: {
            model: models.Client,
            as: 'client',
          },
        },
      ],
    });

    return res.send({
      message: 'test',
      data: invoices,
    });
  } catch (error) {
    return next(error);
  }
};
