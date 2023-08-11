const express = require('express');
const { Router } = require("express");


const { createProductValidator,
        editProductDescriptionValidator,
        addProductToCartValidator } = require('../validators/product.validator');
    
const productRouter = Router();      

productRouter.post('/product', createProductValidator, (req, res) => {
  // Procesar la creación de un producto y manejar los errores de validación
});

productRouter.put('/product/:productId/description', editProductDescriptionValidator, (req, res) => {
  // Procesar la edición de la descripción de un producto y manejar los errores de validación
});

productRouter.post('/car/product/:productId', addProductToCartValidator, (req, res) => {
  // Procesar la adición de un producto al carrito y manejar los errores de validación
});

module.exports = productRouter;
