const { getUsersList, registerUser, loginUser, addProductToBasket,loadBasketProducts, } = require("../services/user_service");
const {encryptPassword, generateAccessToken, generateRefreshToken} = require('../scripts/utils/helpers');
const httpStatus = require('http-status');

const getIndex = (req, res) =>{
    getUsersList().then((user)=>{
        res.status(200).json({users:user});
    }).catch((err)=>{
        res.status(500).json({error:err});
    })
}

//Load BasketProducts
const getBasketProducts = (req, res)=>{
    console.log('get basket product node from cont req user : ',req.user);
    loadBasketProducts().then((respond)=>{
        res.status(200).send(respond);
    }).catch((err)=>{
        res.status(500).json({'error':err});
    })
}

const createUser = (req, res) =>{
    console.log('create user work');
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

const addProductBasket = (req, res) => {
    const product = req.body;
    addProductToBasket(product).then((respond)=>{
        res.status(200).json({'respond for adding Product' : respond});
    }).catch((err)=>{
        res.json({'error for adding product ' : err});
    });
}


module.exports = {
    getIndex, createUser, login, addProductBasket,getBasketProducts
}