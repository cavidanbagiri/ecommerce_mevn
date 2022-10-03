
const Product = require('../models/product_model');

//Load Product For Showing Index Page
const loadDataForIndex = async () => {
    const products = await Product.find();
    return products;
}

//Load Parfumery Data From Collection
const loadParfumeries = async () => {
    console.log('Load Parfumery Works');
    const products = await Product.find({'catalog':'Perfume'});
    console.log('products is : ', products);
    return products;
}

//Create Product Post
const createProductPost = async (product_data) => {
    const newProduct = new Product(product_data)
    return newProduct.save();
}

//Get One Item With Id
const getProductItem = async(id)=>{
    const product = await Product.findById(id);
    return product;
}


module.exports = {

    loadDataForIndex,
    createProductPost,
    loadParfumeries,
    getProductItem

}
