const { check } = require('express-validator');
const validateResult = require("../utils/validate");

// Validador para la creación de un producto
const createProductValidator = [
  check('name').notEmpty().withMessage('El nombre del producto es requerido'),
  check('description').notEmpty().withMessage('La descripción del producto es requerida'),
  check('price')
    .notEmpty().withMessage('El precio del producto es requerido')
    .isNumeric().withMessage('El precio debe ser numérico')
    .custom(value => value >= 0).withMessage('El precio debe ser igual o mayor a cero'),
    validateResult,
];

// Validador para la edición de la descripción de un producto
const editProductDescriptionValidator = [
  check('description').notEmpty().withMessage('La descripción del producto es requerida'),
  validateResult,
];

// Validador para agregar un producto al carrito
const addProductToCartValidator = [
  check('productId').notEmpty().withMessage('El ID del producto es requerido'),
  check('productId').isUUID().withMessage('El ID del producto no es válido'),
  validateResult,
];

module.exports = {
    addProductToCartValidator,
    editProductDescriptionValidator,
    createProductValidator

};
