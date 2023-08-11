const express = require('express');
const { Router } = require("express");
const orderController = require('../controllers/order.controllers');
const orderValidator = require('../validators/order.validators');
const orderRouter = Router();

// Ruta para crear una orden
orderRouter .post('/order', orderValidator.createOrderValidator, orderController.createOrder);

// Ruta para obtener todas las órdenes
orderRouter .get('/order', orderController.getAllOrders);

// Ruta para obtener una orden por su ID
orderRouter .get('/order/:orderId', orderController.getOrderById);

// Ruta para actualizar el estado de una orden
orderRouter .put('/order/:orderId/status', orderController.updateOrderStatus);

// Ruta para eliminar una orden
orderRouter .delete('/order/:orderId', orderController.deleteOrder);

module.exports = orderRouter ;
