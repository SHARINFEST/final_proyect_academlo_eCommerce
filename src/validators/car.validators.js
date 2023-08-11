const { check } = require('express-validator');
const validateResult = require("../utils/validate");

// Validador para agregar un producto al carrito
const addProductToCartValidator = [
  check('productId').notEmpty().withMessage('El ID del producto es requerido'),
  check('productId').isUUID().withMessage('El ID del producto no es válido'),
  validateResult,
];

// Validador para eliminar un producto del carrito
const removeProductFromCartValidator = [
  check('productId').notEmpty().withMessage('El ID del producto es requerido'),
  check('productId').isUUID().withMessage('El ID del producto no es válido'),
  validateResult,
];

module.exports = {
    addProductToCartValidator,
    removeProductFromCartValidator

};
