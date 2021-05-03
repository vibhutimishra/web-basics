const express = require('express');
const router = express.Router();
const path = require('path')
const rootdir = require('../utils/path.js');
const productController = require('../controllers/shop.js')

router.get('/shop', productController.getProduct);

router.post('/shop', productController.postProduct);

module.exports= router;