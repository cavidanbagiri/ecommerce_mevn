
//Import User Models
const User = require('../models/user_model');
//Import Product 
const Product = require('../models/product_model');

const getUsersList = () =>{
    const users = User.find({});
    return users;
}

//Get Basket Products
const loadBasketProducts = async () =>{
    console.log('from server');
    const temp_user = await User.findOne({email:'cavidanbagiri@gmail.com'});
    let basket_products = [];
    for(let i = 0 ; i < temp_user.basket.length;i++){
        // console.log('is changed and result is : ',temp_user.basket[i]);
        // console.log('id is : ',temp_user.basket[i]);
        const product = await Product.findOne({refid:temp_user.basket[i]});
        console.log('product : ',product)
        console.log('--------------');
        basket_products.push(product);
    }
    return basket_products;
}

const registerUser = (user) =>{
    const cuser = new User(user);
    return cuser.save();
}

const loginUser = (user) =>{
    const cuser = User.findOne(user);
    return cuser;   
}

const addProductToBasket = async(product) => {
    const temp_user = await User.findOne({email:'cavidanbagiri@gmail.com'})
    await temp_user.update({
        $push:{
            basket:product
        }
    }).then((respond)=>console.log('respond is : ',respond)).catch((err)=>console.log('err is ',err));
}



module.exports = {
    getUsersList,
    registerUser,
    loginUser,
    addProductToBasket,
    loadBasketProducts
}
