const express = require('express');
const { Router } = require("express");
const carController = require('../controllers/car.controllers');
const { isAuthenticated } = require('../middlewares/auth.middleware');
const { addProductToCartValidator, removeProductFromCartValidator } = require('../validators/car.validators');

const carRouter = Router();
// Obtener el carrito del usuario actual
carRouter.get('/car', isAuthenticated, carController);

// Agregar un producto al carrito
carRouter.post('/car/product/:productId', isAuthenticated, addProductToCartValidator, carController.addProductToCart);

// Eliminar un producto del carrito
carRouter.delete('/car/product/:productId', isAuthenticated, removeProductFromCartValidator, carController.removeProductFromCart);

// Vaciar el carrito
carRouter.delete('/car', isAuthenticated, carController.clearCart);



module.exports = carRouter;
