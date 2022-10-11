
const queryString = require('query-string');

const {loadAccessories, loadFileteredAccessories} = require('../services/accessories_service');

//Get All Accessories
const getAccessories = (req, res)=>{
    loadAccessories().then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        console.log('Error Happen inside of accessories index controller ', err);
    })
}
//Get Selected Accessories
const getFilteredAccessories = (req, res)=>{
    loadFileteredAccessories(req?.query).then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        console.log('Error Happen inside of accessories index controller ', err);
    })
}


module.exports = {
    getAccessories,
    getFilteredAccessories
}
