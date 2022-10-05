
const express = require('express');
const router = express.Router();
const {getMakeups} = require('../controllers/makeup_controller');

router.get('/', getMakeups);


module.exports = router;