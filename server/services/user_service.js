
//Import User Models
const User = require('../models/user_model');

const getUsersList = () =>{
    const users = User.find({});
    return users;
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
    console.log('product is : ',product, ' user : ',temp_user);
    let subproduct = await new temp_user.subProductSchema({
        product_id:product,
        product_catalog:product.catalog,
        product_brand:product.brand,
        product_name:product.name,
        product_actual_price:product.actualprice,
        product_withoutpercentprice:product.withoutpercentprice,
        product_percentprice:product.percentprice,
        product_file:product.file
    }).save().then((respond)=>{
        console.log('Sub Product Added : ', respond)
    }).catch((err)=>{
        console.log('Sub Product Cant Added : ', err)
    })
    await temp_user.updateOne({
        $push:{basket:subproduct}
    }).then((respond)=>{
        console.log('Product Added : ', respond)
    }).catch((err)=>{
        console.log('Product cant Added : ', err)
    })
}

module.exports = {
    getUsersList,
    registerUser,
    loginUser,
    addProductToBasket
}
