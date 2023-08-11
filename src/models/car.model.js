const db = require("../utils/database");
const { DataTypes } = require('sequelize');


const Car = db.define('Car', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  totalPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});

module.exports = Car;
