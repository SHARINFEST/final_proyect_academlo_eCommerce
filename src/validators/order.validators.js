const { check } = require('express-validator');
const validateResult = require("../utils/validate");

const createOrderValidator = [
  check('totalPrice').notEmpty().withMessage('El precio total es requerido'),
  check('totalPrice').isNumeric().withMessage('El precio total debe ser numérico'),
  check('userId').notEmpty().withMessage('El ID del usuario es requerido'),
  check('userId').isUUID().withMessage('El ID del usuario no es válido'),
  check('products').isArray().withMessage('La lista de productos debe ser un arreglo'),
  check('products.*.product').notEmpty().withMessage('El ID del producto es requerido'),
  check('products.*.product').isUUID().withMessage('El ID del producto no es válido'),
  check('products.*.quantity').notEmpty().withMessage('La cantidad del producto es requerida'),
  check('products.*.quantity').isInt({ min: 1 }).withMessage('La cantidad del producto debe ser un número entero positivo'),
  validateResult,
];

module.exports = {
    createOrderValidator
};
