const { check } = require('express-validator');
const validateResult = require("../utils/validate");

const productInCartValidator = [
  check('carId').notEmpty().withMessage('El ID del carrito es requerido'),
  check('carId').isInt().withMessage('El ID del carrito debe ser un número entero'),
  check('productId').notEmpty().withMessage('El ID del producto es requerido'),
  check('productId').isInt().withMessage('El ID del producto debe ser un número entero'),
  check('quantity').notEmpty().withMessage('La cantidad es requerida'),
  check('quantity').isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero positivo'),
  check('price').notEmpty().withMessage('El precio es requerido'),
  check('price').isNumeric().withMessage('El precio debe ser numérico'),
  check('status').notEmpty().withMessage('El estado es requerido'),
  check('status').isIn(['pending', 'completed']).withMessage('El estado debe ser "pending" o "completed"'),
  validateResult,
];
module.exports = [
    productInCartValidator
];