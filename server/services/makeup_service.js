
const MakeUp = require('../models/makeup_model');

//Loading All Makeups
const loadMakeups = async () =>{
    const makeups = await MakeUp.find();
    return makeups;
}

//Loading Filtered Accessories
const loadFileteredMakeups = async (query) => {
    const product = await MakeUp.find(query);
    console.log('product : ', product);
    console.log('-----------------------------------------------');
    return product;
}

module.exports = {
    loadMakeups,
    loadFileteredMakeups
}

