
const mongoose = require('mongoose');
const logger = require('../scripts/logger/user_loger');
const {Schema} = mongoose;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String
}, {timestamps:true, versionKey:false})

userSchema.post('save', (doc)=> {
    logger.log({
        level:'info',
        message:doc
    });
});

const User = mongoose.model('users', userSchema);

module.exports = User;