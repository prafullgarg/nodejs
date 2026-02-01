const path = require('path');
const express = require('express');
const router = express.Router();
const {getAddProducts, postAddProducts} = require("../controllers/products")

// /admin/add-product => GET
router.get('/add-product', getAddProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProducts);

module.exports = router;
