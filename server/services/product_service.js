
const Product = require('../models/product_model');

//Load Product For Showing Index Page
const loadDataForIndex = async () => {
    const products = Product.find();
    return products;
}

//Create Product Post
const createProductPost = async () => {
    const newProduct = new Product({
        brand : "Parfume De Marly",
        catalog : "Women Parfume",
        name : "Akaster",
        raiting : '5',
        price:"7999",
        sex : 'Women'
    })
    // return newProduct.save();
}


module.exports = {

    loadDataForIndex,
    createProductPost,

}
