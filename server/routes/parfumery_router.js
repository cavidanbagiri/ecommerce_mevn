
const express = require('express');
const router = express.Router();
const {getPerfumes} = require('../controllers/parfumery_controller');

//Get Perfumes For Perfume URL
router.get('/', getPerfumes)



module.exports = router;
