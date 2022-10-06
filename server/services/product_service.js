
const Product = require('../models/product_model');
const Parfumery = require('../models/parfumery_model');
const Makeup = require('../models/makeup_model');

//Load All Products
const loadProduct = () =>{
    const products = Product.find();
    return products;
}

//Create Product->Parfumery Post
const createParfumeryPost = async (product_data) => {
    const newParfumery = await new Parfumery(product_data)
    return newParfumery.save();
}

//Create Product->Parfumery Post
const createMakeupPost = async (product_data) => {
    const newParfumery = await new Makeup(product_data)
    return newParfumery.save();
}


//Get One Item With Id
const getProductItemById = async(id)=>{
    const parfumery = await Parfumery.findById(id);
    return parfumery;
}


module.exports = {

    loadProduct,
    createParfumeryPost,
    createMakeupPost,
    getProductItemById,

}