
const {loadMakeups, createMakeUpPost} = require('../services/makeup_service');

const getMakeups = (req, res)=>{

    res.json({'make up val':'some'});

}

module.exports = {
    getMakeups
}
