
const express = require('express');
const router = express.Router();
const multer_upload = require('../helpers/multer_service.js');
const { getIndex, getCreateProduct, postCreateProduct, getParfumeryItem,getBasketProducts } = require('../controllers/product_controller');

//get Index Page
router.get('/', getIndex);
//get User Basket products
router.get('/basket', getBasketProducts);
//Get Create Data From Admin Page
router.get('/create', getCreateProduct);
//Post New Data From Admin Page
router.post('/create', multer_upload.single('file'), postCreateProduct);
//Get Product Item
router.get('/product/:id', getParfumeryItem);

module.exports = router;
