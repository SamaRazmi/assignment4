const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');

const TestCurrency = sequelize.define('testCurrency', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  currencyCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  conversionRate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = TestCurrency;
