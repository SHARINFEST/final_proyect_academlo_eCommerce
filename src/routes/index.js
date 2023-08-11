const productInCartRouter= require("./productsInCart.routes");
const userRoutes = require("./users.routes");
const productInOrderRouter = require("./productInOrder.routes");
const productRouter = require("./product.routes");
const orderRouter  = require("./order.routes");
const carRouter = require("./car.routes");


// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(productInCartRouter);
  app.use(productInOrderRouter);
  app.use(productRouter);
  app.use(orderRouter );
  app.use(carRouter);
  
};

module.exports = apiRoutes;