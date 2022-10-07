
const mongoose = require('mongoose');
const accessoriesSchema = new mongoose.Schema({

    brand: String,
    catalog: String,
    name: String,
    for: String,
    color: String,
    raiting: { type: Number, default: 5 },
    price: String,
    sex: String,
    material: String,
    style: String,
    closuretype: String,
    formfactor: String,
    linningdescription: String,
    walletcompartment: String,
    pocketdescription: String,
    decription: { type: String, default: '' },
    characteristic: { type: String, default: '' },
    information: { type: String, default: '' },
    comments: { type: Array, default: [] },
    file: String

}, { timestamps: true, versionKey: false });

const Accessories = new mongoose.model('accessories', accessoriesSchema, 'accessories');

module.exports = Accessories;
