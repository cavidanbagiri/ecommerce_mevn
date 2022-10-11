
const express = require('express');
const router = express.Router();
const {getAccessories, getFilteredAccessories} = require('../controllers/accessories_controller');

router.get('/', getAccessories);
router.get('/filters', getFilteredAccessories);


module.exports = router;