
const Accessories = require('../models/accessories_model');

//Loading All Makeups
const loadAccessories = async () =>{
    const product = await Accessories.find();
    return product;
}


module.exports = {
    loadAccessories,
}

