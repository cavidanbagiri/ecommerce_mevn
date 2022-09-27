
//Import User Models
const User = require('../models/user_model');

const getUsersList = () =>{
    const users = User.find({});
    return users;
}

const registerUser = (user) =>{
    const cuser = new User(user);
    return cuser.save();
}

const loginUser = (user) =>{
    const cuser = User.findOne(user);
    return cuser;   
}

module.exports = {
    getUsersList,
    registerUser,
    loginUser
}
