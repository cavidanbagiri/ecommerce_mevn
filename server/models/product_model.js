
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    parfumeries: [{
        type: Schema.Types.ObjectId, ref:"parfumery"
    }],
    makeups: [{
        type: Schema.Types.ObjectId, ref:"makeup"
    }]

})


const Product = new mongoose.model('product', productSchema);

module.exports = Product;