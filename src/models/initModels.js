// importar los modelos
const Users = require("./users.model");
const Order = require("./order.model");
const Car = require("./car.model");
const Product = require("./product.model");
const ProductInCar = require("./productInCart.model");
const ProductInOrder = require("./productInOrder.model");

const initModels = () => {
  // Un usuario tiene muchos productos
  Users.hasMany(Product, { foreignKey: "userId" });
  // un producto le pertenece a un  usuario
  Product.belongsTo(Users, { foreignKey: "userId"});
  //Un usuario solo puede tener un carrito
  Users.belongsTo(Car, { foreignKey: "userId" });
  // Un carrito le pertenece a un usuario
  Car.belongsTo(Users, { foreignKey: "userId" });
  // Un usuario puede crear muchas ordenes
  Users.hasMany(Order, { foreignKey: "userId" });
  // Una orden le pertenece a un usuario
  Order.belongsTo(Users, { foreignKey: "userId" });
  // Un ProductInCart puede tener uno o muchos productos
  ProductInCar.belongsTo(Product, {  foreignKey: "productId" });
  //Un ProductInCart le pertenece a un carrito
  ProductInCar.hasOne(Car, { foreignKey: "carId" });
  // Un carrito tiene muchos ProductInCart
  Car.hasMany(ProductInCar, { foreignKey: "carId" });
  // Una orden tiene muchos ProductInOrder
  Order.hasMany(ProductInOrder, { foreignKey: "orderId" });
  // Un ProductInOrder tiene uno o muchos producto y pertenece a una orden
  ProductInOrder.belongsTo(Product, { foreignKey: "productId" });
 // Un ProductInOrder pertenece a una orden
 ProductInOrder.hasOne(Order, { foreignKey: "orderId" });
};

module.exports = initModels;
