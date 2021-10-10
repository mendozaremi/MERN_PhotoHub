const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/productControllers')

// GET ALL PRODUCTS FROM DB
// GET /api/products
// access Public
router.get('/  ', getAllProducts)

// GET A PRODUCT BY ID FROM DB
// GET /api/products/:id
// access Public
router.get('/:id', getProductById)

module.exports = router;