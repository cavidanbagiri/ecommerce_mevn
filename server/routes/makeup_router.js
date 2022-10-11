
const express = require('express');
const router = express.Router();
const {getMakeups, getFilteredMakeups} = require('../controllers/makeup_controller');

router.get('/', getMakeups);
router.get('/filters', getFilteredMakeups);

module.exports = router;