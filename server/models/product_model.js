
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    catalog: String,
    brand: String,
    name: String,
    actualprice: Number,
    percentprice: Number,
    withoutpercentprice: Number,
    file : String,
    refid: {
        type: Schema.Types.ObjectId
    }

})


const Product = new mongoose.model('product', productSchema);

module.exports = Product;