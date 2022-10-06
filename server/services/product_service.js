
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
    const newProduct = await new Parfumery(product_data)
    console.log('data is ',product_data);
    try{
       const some = new Product ({
        catalog:product_data.catalog,
        refid:newProduct
       });
       some.save();
    }
    catch(e){
        console.log('e happen : ',e);
    }
    return newProduct.save();
}

//Create Product->Parfumery Post
const createMakeupPost = async (product_data) => {
    const newProduct = await new Makeup(product_data)
    try{
        const some = new Product ({
         catalog:product_data.catalog,
         refid:newProduct
        });
        some.save();
     }
     catch(e){
         console.log('e happen : ',e);
     }
    return newProduct.save();
}


//Get One Item With Id
const getProductItemByIdFromParfumery = async(id)=>{
    const parfumery = await Parfumery.findById(id);
    return parfumery;
}

//Get One Item With Id
const getProductItemByIdFromMakeup = async(id)=>{
    const makeup = await Makeup.findById(id);
    return makeup;
}


module.exports = {

    loadProduct,
    createParfumeryPost,
    createMakeupPost,
    getProductItemByIdFromParfumery,
    getProductItemByIdFromMakeup
}