const Product = require('../models/product.model');
const Car = require('../models/car.model');
const ProductInCart = require('../models/productInCart.model');

// Obtener todos los productos disponibles
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ availableQty: { $gt: 0 } }).populate('userId', 'username');

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const userId = req.user.id; // Obtener el ID del usuario desde el token

  try {
    const product = await Product.create({
      name,
      description,
      price,
      availableQty: 0,
      status: 'pending',
      userId
    });

    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Editar la descripción de un producto
const editProductDescription = async (req, res) => {
  const { productId } = req.params;
  const { description } = req.body;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    product.description = description;
    await product.save();

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: 'Error al editar la descripción del producto' });
  }
};

// Agregar un producto al carrito
const addProductToCart = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id; // Obtener el ID del usuario desde el token

  try {
    const product = await Product.findOne({ _id: productId, availableQty: { $gt: 0 } });

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado o no disponible' });
    }

    const cart = await Car.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: 'El usuario no tiene un carrito' });
    }

    const productInCart = await ProductInCart.create({
      carId: cart.id,
      productId,
      quantity: 1,
      price: product.price,
      status: 'pending'
    });

    res.status(200).json({ productInCart });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el producto al carrito' });
  }
};

module.export = {
  addProductToCart ,
  editProductDescription,
  createProduct,
  getProducts
}


