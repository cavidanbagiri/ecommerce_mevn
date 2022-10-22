
const express = require('express');
const router = express.Router();
const multer_upload = require('../helpers/multer_service.js');
const { getIndex, getSearch, getCreateProduct, postCreateProduct, getParfumeryItem } = require('../controllers/product_controller');

//get Index Page
router.get('/', getIndex);
//Search Bar Products
router.get('/search',getSearch);
//Get Create Data From Admin Page
router.get('/create', getCreateProduct);
//Post New Data From Admin Page
router.post('/create', multer_upload.single('file'), postCreateProduct);
//Get Product Item
router.get('/product/:id', getParfumeryItem);

module.exports = router;
