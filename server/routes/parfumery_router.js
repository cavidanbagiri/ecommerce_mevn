
const express = require('express');
const router = express.Router();
const multer_upload = require('../helpers/multer_service.js');


const {getIndex, getCreateParfumery, postCreateParfumery, getPerfumes, getParfumeryItem} = require('../controllers/parfumery_controller');

//Load Some Data For Home Page
router.get('/', getIndex);
//Get Create Data From Admin Page
router.get('/create', getCreateParfumery);
//Post New Data From Admin Page
router.post('/create', multer_upload.single('file'), postCreateParfumery);
//Get Perfumes For Perfume URL
router.get('/perfumes', getPerfumes)
//Get Product Item
router.get('/product/:id', getParfumeryItem)



module.exports = router;
