
const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controllers');
//Take User Joi Schema for validations
const {user_schema, user_login_schema} = require('../validators/user_validator');
//Take Validator For Validate Schema
const {validate} = require('../middlewares/validate');
//Authentication Middleware
const {authenticationToken} = require('../middlewares/authentication');

router.get('/', authenticationToken, user_controller.getIndex);
// router.post('/register', validate(user_schema), user_controller.createUser);
router.post('/register', user_controller.createUser);
router.post('/login', validate(user_login_schema), user_controller.login);

module.exports = router;
