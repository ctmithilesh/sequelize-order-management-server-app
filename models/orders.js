'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsTo(models.Customers, { foreignKey: 'customerId' })
    }
  }
  Orders.init({
    orderItem: DataTypes.STRING,
    orderPrice: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};