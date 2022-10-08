const mongoose = require('mongoose');
const makeupSchema = new mongoose.Schema({

    brand : String,
    catalog : String,
    name : String,
    for : String,
    color : String,
    raiting : { type: Number, default: 5 },
    actualprice: Number,
    percentprice: Number,
    withoutpercentprice: Number,
    sex : String,
    formulation : String,
    department : String,
    stock : Boolean,
    decription : {
        type: String,
        default: ''
    },
    characteristic :{
        type: String,
        default: ''
    },
    information : {
        type: String,
        default: ''
    },
    comments : {
        type : Array,
        default:[]
    },
    file : String

}, { timestamps:true, versionKey:false});

const Makeup = new mongoose.model('makeup', makeupSchema, 'makeup');

module.exports = Makeup;