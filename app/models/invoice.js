'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.InvoiceClient, {
        foreignKey: 'invoice_id',
        as: 'invoice_client',
      });
    }
  }
  Invoice.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Invoice',
      tableName: 'invoices',
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    }
  );
  return Invoice;
};
