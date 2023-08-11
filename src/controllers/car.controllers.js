const Car = require('../models/car.model');
const Product = require('../models/product.model');
const Order = require('../models/order.model');

// Obtener el carrito del usuario actual
const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const car = await Car.findOne({ userId }).populate('products.product');
    res.status(200).json({ cart: car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el carrito' });
  }
};

// Agregar un producto al carrito
const addProductToCart = async (req, res) => {
  try {
    const userId = req.users.id;
    const productId = req.params.productId;
    const quantity = req.body.availableQty;

    // Verificar si el producto ya está en el carrito
    const car = await Car.findOne({ userId });
    const productIndex = car.product.findIndex(p => p.product.toString() === productId);

    if (productIndex !== -1) {
      // El producto ya está en el carrito, actualizar la cantidad
      car.product[productIndex].quantity += quantity;
    } else {
      // El producto no está en el carrito, agregarlo
      car.product.push({ product: productId, quantity });
    }

    await car.save();

    res.status(200).json({ message: 'Producto agregado al carrito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al agregar el producto al carrito' });
  }
};

// Realizar una compra: vaciar el carrito y cambiar el estado de los productos a "purchased"
const purchase = async (req, res) => {
  try {
    const userId = req.users.id;

    // Obtener el carrito del usuario actual
    const car = await Car.findOne({ userId }).populate('products.product');

    // Obtener los productos en el carrito
    const products = car.product.map(item => ({
      product: item.product.id,
      availableQty: item.availableQty
    }));

    // Calcular el total de la compra
    const totalPrice = products.reduce((total, item) => {
      const product = car.product.find(p => p.product.id.toString() === item.product.toString());
      return total + (product.product.price * item.availableQty);
    }, 0);

    // Crear una nueva orden
    const order = new Order({
      totalPrice,
      userId,
      products
    });

    await order.save();

    // Vaciar el carrito
    car.products = [];
    await car.save();

    res.status(200).json({ message: 'Compra realizada con éxito', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al realizar la compra' });
  }
};

module.exports = {
    purchase,
    addProductToCart,
    getCart 
}


