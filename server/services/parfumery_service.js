
const Parfumery = require('../models/parfumery_model');


//Load Parfumery Data From Collection
const loadParfumeries = async () => {
    console.log('Load Parfumery Works');
    const parfumeries = await Parfumery.find({'catalog':'Perfume'});
    console.log('products is : ', parfumeries);
    return parfumeries;
}

//Create Product Post
const createParfumeryPost = async (parfumery_data) => {
    const newParfumery = new Parfumery(parfumery_data)
    return newParfumery.save();
}

//Get One Item With Id
const getParfumeryItemById = async(id)=>{
    const parfumery = await Parfumery.findById(id);
    return parfumery;
}


module.exports = {

    createParfumeryPost,
    loadParfumeries,
    getParfumeryItemById

}
