
const mongoose = require('mongoose');


const parfumerySchema = new mongoose.Schema({

    brand : String,
    catalog : String,
    name : String,
    raiting : String,
    price : String,
    sex : String,
    for : String,
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

}, { timestamps:true, versionKey:false}, {collection: 'parfumery'});

const Parfumery = new mongoose.model('parfumery', parfumerySchema, 'parfumery');

module.exports = Parfumery;