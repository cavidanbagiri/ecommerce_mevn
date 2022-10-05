
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    brand : String,
    catalog : String,
    name : String,
    raiting : String,
    price : String,
    sex : String,
    decription : String,
    characteristic : String,
    information : String,
    comments : {
        type : Array,
        default:[]
    },
    file : String

}, { timestamps:true, versionKey:false});

const Product = new mongoose.model('product', productSchema);

module.exports = Product;