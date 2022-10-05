
const Product = require('../models/product_model');
const Parfumery = require('../models/parfumery_model');
const MakeUp = require('../models/makeup_model');

//Load All Products
const loadProduct = () =>{
    const products = Product.find();
    return products;
}

//Create Product Post
const createParfumeryPost = async (parfumery_data) => {
    const newParfumery = new Parfumery(parfumery_data)
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
    getProductItemById

}