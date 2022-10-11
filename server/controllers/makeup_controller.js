
const {loadMakeups, loadFileteredMakeups} = require('../services/makeup_service');

const getMakeups = (req, res)=>{

    loadMakeups().then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        console.log('Error Happen inside of makeup index controller ', err);
    })

}

//Get Selected Accessories
const getFilteredMakeups = (req, res)=>{
    loadFileteredMakeups(req?.query).then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        console.log('Error Happen inside of accessories index controller ', err);
    })
}

module.exports = {
    getMakeups,
    getFilteredMakeups
}
