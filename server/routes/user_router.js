
const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controllers');
//Take User Joi Schema for validations
const {user_schema, user_login_schema} = require('../validators/user_validator');
//Take Validator For Validate Schema
const {validate} = require('../middlewares/validate');
//Authentication Middleware
const {authenticationToken} = require('../middlewares/authentication');

//Return Back To All Users
router.get('/',  user_controller.getIndex);
//Get User Basket Products
router.get('/basket', user_controller.getBasketProducts);
// router.post('/register', validate(user_schema), user_controller.createUser);
router.post('/register', user_controller.createUser);
//Post Login Page
router.post('/login', validate(user_login_schema), user_controller.login);
//Add Product to User Basket Without Validate
// router.post('/addproduct', authenticationToken, user_controller.addProductBasket);
router.post('/addproduct',  user_controller.addProductBasket);

module.exports = router;
