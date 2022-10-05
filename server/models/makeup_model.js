
const mongoose = require('mongoose');


const makeupSchema = new mongoose.Schema({

    brand : String,
    catalog : String,
    name : String,
    raiting : String,
    price : String,
    sex : String,
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

const Makeup = new mongoose.model('makeup', parfumerySchema, 'makeup');

module.exports = Makeup;