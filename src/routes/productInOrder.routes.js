const express = require('express');
const { Router } = require("express");
const productInOrderController = require('../controllers/productInOrder.controllers');
const productInOrderValidator = require('../validators/productInOrder.validators');

const productInOrderRouter = Router();

// Ruta para agregar un producto a una orden
productInOrderRouter.post('/productInOrder', productInOrderValidator.productInOrderValidator, productInOrderController.addProductToOrder);

// Ruta para obtener todos los productos en una orden
productInOrderRouter.get('/productInOrder/:orderId', productInOrderController.getProductsInOrder);

// Ruta para actualizar la cantidad de un producto en una orden
productInOrderRouter.put('/productInOrder/:productInOrderId', productInOrderController.updateProductQuantityInOrder);

// Ruta para eliminar un producto de una orden
productInOrderRouter.delete('/productInOrder/:productInOrderId', productInOrderController.removeProductFromOrder);

module.exports =productInOrderRouter;
