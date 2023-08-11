const express = require('express');
const { Router } = require("express");
const productInCartController = require('../controllers/productInCart.controllers');
const productInCartValidator = require('../validators/productInCart.validators');
const productInCartRouter = Router();


// Ruta para agregar un producto al carrito
productInCartRouter.post('/productInCart', productInCartValidator.productInCartValidator, productInCartController.addProductToCart);

// Ruta para obtener todos los productos en el carrito
productInCartRouter.get('/productInCart', productInCartController.getProductsInCart);

// Ruta para actualizar la cantidad de un producto en el carrito
productInCartRouter.put('/productInCart/:productInCartId', productInCartController.updateProductQuantityInCart);

// Ruta para eliminar un producto del carrito
productInCartRouter.delete('/productInCart/:productInCartId', productInCartController.removeProductFromCart);

module.exports = productInCartRouter;
