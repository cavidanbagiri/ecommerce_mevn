
const { loadParfumeries } = require('../services/parfumery_service');

//Get All Perfumes
const getPerfumes = (req, res) => {
    loadParfumeries().then((respond) => {
        res.send(respond);
    }).catch((err)=>{
        res.json({categoryindexerror : err});
    })
    
}


module.exports = {
    getPerfumes,
}
