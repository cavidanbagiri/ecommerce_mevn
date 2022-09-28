
const express = require('express');
const router = express.Router();

const {getIndex, getCreateProduct, postCreateProduct} = require('../controllers/product_controller');

router.get('/', getIndex);
router.get('/create', getCreateProduct);
router.post('/create', postCreateProduct);

module.exports = router;
