
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');


const authenticationToken = (req, res, next) =>{

    console.log('Inside of Authentication Token');

    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if(token===null){
        console.log('tokem is null');
        res.status(httpStatus.UNAUTHORIZED).json({err:'User UnAuthentication'});
    }
    jwt.verify(token, process.env.GENERATE_ACCESS_TOKEN, (err, user)=>{
        if(err) res.status(httpStatus.FORBIDDEN).json({error:err})
        req.user = user;
        next();
    })

}

module.exports = {
    authenticationToken
}

