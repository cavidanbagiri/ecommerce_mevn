
const MakeUp = require('../models/makeup_model');

//Loading All Makeups
const loadMakeups = async () =>{
    const makeups = await MakeUp.find();
    return makeups;
}


module.exports = {
    loadMakeups,
}

