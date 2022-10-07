
const {loadAccessories} = require('../services/accessories_service');

const getAccessories = (req, res)=>{

    loadAccessories().then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        console.log('Error Happen inside of accessories index controller ', err);
    })

}

module.exports = {
    getAccessories
}
