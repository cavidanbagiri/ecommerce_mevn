
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

const encryptPassword = (password) =>{
    const hashpassword = CryptoJS.SHA256(password, process.env.PASSWORD_HASHING_SECRET_KEY).toString();
    return hashpassword
}

const generateAccessToken = (user)=>{
    return jwt.sign({name:user.first_name, ...user},process.env.GENERATE_ACCESS_TOKEN, {expiresIn:"1w"})
}
const generateRefreshToken = (user)=>{
    return jwt.sign({name:user.first_name, ...user},process.env.GENERATE_RESFRESH_TOKEN)
}


module.exports = {
    encryptPassword,
    generateAccessToken,
    generateRefreshToken
}