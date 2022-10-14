
const mongoose = require('mongoose');
const logger = require('../scripts/logger/user_loger');
const {Schema} = mongoose;

// const basketSchema = new Schema({
//     path_id : {type: Schema.Types.ObjectId},
//     catalog : String
// })

// const accessoriesSchema = new mongoose.Schema({

//     brand: String,
//     catalog: String,
//     name: String,
//     for: String,
//     color: String,
//     raiting: { type: Number, default: 5 },
//     actualprice: Number,
//     percentprice: Number,
//     withoutpercentprice: Number,
//     sex: String,
//     material: String,
//     style: String,
//     closuretype: String,
//     formfactor: String,
//     linningdescription: String,
//     walletcompartment: String,
//     pocketdescription: String,
//     stock : Boolean,
//     decription: { type: String, default: '' },
//     characteristic: { type: String, default: '' },
//     information: { type: String, default: '' },
//     comments: { type: Array, default: [] },
//     file: String

// }, { timestamps: true, versionKey: false });

const subProductSchema = new Schema({
    product_id:{type: Schema.Types.ObjectId},
    product_catalog:String,
    product_brand:String,
    product_name:String,
    product_actual_price:Number,
    product_withoutpercentprice:Number,
    product_percentprice:Number,
    product_file:String
})

const userSchema = new Schema({
    email: String,
    password: String,
    basket: [
        subProductSchema
    ]
}, {timestamps:true, versionKey:false})

userSchema.post('save', (doc)=> {
    logger.log({
        level:'info',
        message:doc
    });
});

const User = mongoose.model('users', userSchema);

module.exports = User;