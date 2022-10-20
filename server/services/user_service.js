
//Import User Models
const User = require('../models/user_model');

const getUsersList = () =>{
    const users = User.find({});
    return users;
}

//Get Basket Products
const loadBasketProducts = async (req) =>{
    console.log(req.user);
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
