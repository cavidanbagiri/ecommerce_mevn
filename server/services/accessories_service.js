
const Accessories = require('../models/accessories_model');
const Product = require('../models/product_model');

//Loading All Accessories
const loadAccessories = async () =>{
    const product = await Accessories.find();
    return product;
}

//Loading Filtered Accessories
const loadFileteredAccessories = async (query) => {
    const product = await Accessories.find(query);
    return product;
}


module.exports = {
    loadAccessories,
    loadFileteredAccessories
}

