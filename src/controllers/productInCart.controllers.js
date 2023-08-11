const ProductInCart = require('../models/productInCart.model');

// Agregar un producto al carrito
const addProductToCart = async (req, res) => {
  try {
    const { carId, productId, quantity, price, status } = req.body;

    // Crear el nuevo producto en el carrito
    const productInCart = new ProductInCart({
      carId,
      productId,
      quantity,
      price,
      status
    });

    await productInCart.save();

    res.status(201).json({ message: 'Producto agregado al carrito exitosamente', productInCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al agregar el producto al carrito' });
  }
};

// Obtener todos los productos en el carrito
const getProductsInCart = async (req, res) => {
  try {
    const productsInCart = await ProductInCart.find();
    res.status(200).json({ productsInCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los productos en el carrito' });
  }
};

// Actualizar la cantidad de un producto en el carrito
const updateProductQuantityInCart = async (req, res) => {
  try {
    const productInCartId = req.params.productInCartId;
    const { quantity } = req.body;

    const productInCart = await ProductInCart.findByIdAndUpdate(productInCartId, { quantity }, { new: true });

    if (!productInCart) {
      return res.status(404).json({ message: 'Producto en el carrito no encontrado' });
    }

    res.status(200).json({ message: 'Cantidad del producto en el carrito actualizada', productInCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la cantidad del producto en el carrito' });
  }
};

// Eliminar un producto del carrito
const removeProductFromCart = async (req, res) => {
  try {
    const productInCartId = req.params.productInCartId;

    const productInCart = await ProductInCart.findByIdAndDelete(productInCartId);

    if (!productInCart) {
      return res.status(404).json({ message: 'Producto en el carrito no encontrado' });
    }

    res.status(200).json({ message: 'Producto eliminado del carrito exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el producto del carrito' });
  }
};


module.exports = {
    addProductToCart,
    getProductsInCart,
    updateProductQuantityInCart,
    removeProductFromCart

}