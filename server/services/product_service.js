
const Parfumery = require('../models/product_model');

//Load Product For Showing Index Page
const loadDataForIndex = async () => {
    const parfumeries = await Parfumery.find();
    return parfumeries;
}

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

    loadDataForIndex,
    createParfumeryPost,
    loadParfumeries,
    getParfumeryItemById

}
