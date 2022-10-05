
const Parfumery = require('../models/parfumery_model');


//Load Parfumery Data From Collection
const loadParfumeries = async () => {
    const parfumeries = await Parfumery.find({'catalog':'Perfume'});
    return parfumeries;
}




module.exports = {

    loadParfumeries,

}
