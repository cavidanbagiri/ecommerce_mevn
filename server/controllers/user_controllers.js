const { getUsersList, registerUser, loginUser } = require("../services/user_service");
const {encryptPassword, generateAccessToken, generateRefreshToken} = require('../scripts/utils/helpers');
const httpStatus = require('http-status');

const getIndex = (req, res) =>{
    getUsersList().then((user)=>{
        res.status(200).json({users:user});
    }).catch((err)=>{
        res.status(500).json({error:err});
    })
}

const createUser = (req, res) =>{
    req.body.password = encryptPassword(req.body.password);
    registerUser(req.body).then((user)=>{
        res.status(200).json({users:user});
    }).catch((err)=>{
        res.status(500).json({error:err});
    })
}

const login = (req, res) =>{
    req.body.password = encryptPassword(req.body.password);
    loginUser(req.body).then((user)=>{
        if(!user){
            res.status(httpStatus.NOT_FOUND).json({user:'User Not Found'});    
        }
        user={
            ...user.toObject(),
            tokens:{
                access_token:generateAccessToken(user),
                refresh_token:generateRefreshToken(user),
            }
        };
        delete user?.password;
        res.status(httpStatus.OK).json({message:user});
    }).catch((err)=>{
        res.status(500).json({error:err});
    })
}


module.exports = {
    getIndex, createUser, login
}