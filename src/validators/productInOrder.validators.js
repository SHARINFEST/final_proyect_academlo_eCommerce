const { check } = require('express-validator');
const validateResult = require("../utils/validate");


const productInOrderValidator = [
  check('orderId').notEmpty().withMessage('El ID de la orden es requerido'),
  check('orderId').isInt().withMessage('El ID de la orden debe ser un número entero'),
  check('productId').notEmpty().withMessage('El ID del producto es requerido'),
  check('productId').isInt().withMessage('El ID del producto debe ser un número entero'),
  check('quantity').notEmpty().withMessage('La cantidad es requerida'),
  check('quantity').isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero positivo'),
  check('price').notEmpty().withMessage('El precio es requerido'),
  check('price').isNumeric().withMessage('El precio debe ser numérico'),
  validateResult,

];

module.exports = {productInOrderValidator};