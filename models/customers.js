'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {

    static associate(models) {
      // define association here
      Customers.hasMany(models.Orders, { foreignKey: 'customerId' })

    }
  }
  Customers.init({
    firstName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customers',
  });
  return Customers;
};