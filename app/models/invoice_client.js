'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceClient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Invoice, {
        foreignKey: 'invoice_id',
      });

      this.belongsTo(models.Client, {
        foreignKey: 'client_id',
        as: 'client',
      });
    }
  }
  InvoiceClient.init(
    {
      invoice_id: DataTypes.INTEGER,
      client_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'InvoiceClient',
      tableName: 'invoice_client',
      timestamps: false,
    }
  );
  return InvoiceClient;
};
