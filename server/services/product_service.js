
const Product = require('../models/product_model');

//Load Product For Showing Index Page
const loadDataForIndex = async () => {
    const products = Product.find();
    return products;
}

//Create Product Post
const createProductPost = async (product_data) => {
    const newProduct = new Product(product_data)
    return newProduct.save();
}


module.exports = {

    loadDataForIndex,
    createProductPost,

}
