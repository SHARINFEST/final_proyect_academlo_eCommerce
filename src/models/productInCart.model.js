const db = require("../utils/database");
const { DataTypes } = require('sequelize');


const ProductInCart = db.define('ProductInCart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Car',
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Product',
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = ProductInCart;
