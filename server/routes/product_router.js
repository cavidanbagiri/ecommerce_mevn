
const express = require('express');
const router = express.Router();
const multer_upload = require('../helpers/multer_service.js');


const {getIndex, getCreateProduct, postCreateProduct} = require('../controllers/product_controller');

router.get('/', getIndex);
router.get('/create', getCreateProduct);
router.post('/create', multer_upload.single('file'), postCreateProduct);

module.exports = router;
