
const MakeUp = require('../models/makeup_model');
const Product = require('../models/product_model');

//Loading All Makeups
const loadMakeups = async () =>{
    const makeups = await MakeUp.find();
    return makeups;
}

//Loading Filtered Accessories
const loadFileteredMakeups = async (query) => {
    const product = await MakeUp.find(query);
    return product;
}

module.exports = {
    loadMakeups,
    loadFileteredMakeups
}

