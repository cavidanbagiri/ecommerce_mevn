
const express = require('express');
const router = express.Router();
const {getAccessories} = require('../controllers/accessories_controller');

router.get('/', getAccessories);


module.exports = router;