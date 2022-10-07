
const {loadMakeups} = require('../services/makeup_service');

const getMakeups = (req, res)=>{

    loadMakeups().then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        console.log('Error Happen inside of makeup index controller ', err);
    })

}

module.exports = {
    getMakeups
}
