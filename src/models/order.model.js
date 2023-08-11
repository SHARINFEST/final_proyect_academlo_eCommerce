const db = require("../utils/database");
const { DataTypes } = require('sequelize');


const Order = db.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  totalPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Order;
