
const {createParfumeryPost, loadParfumeries, getParfumeryItemById} = require('../services/parfumery_service');


//Get All Perfumes
const getPerfumes = (req, res) => {
    loadParfumeries().then((respond) => {
        res.send(respond);
    }).catch((err)=>{
        res.json({categoryindexerror : err});
    })
    
}
//Get Create Product Page
const getCreateParfumery = (req, res) =>{
    res.json({create_Product_Get:'Create Product get Page'})
}
//Post Create Product Page
const postCreateParfumery = (req, res) => {
    req.body.file = req.file.originalname;
    createParfumeryPost(req.body).then((respond)=>{
        res.json({creatingProduct_Post : respond});
    }).catch((err)=>{
        res.json({creatingProductError_Post : err});
    })
}
//Get One Product Item
const getParfumeryItem = (req, res) => {
    const id = req.params.id;
    getParfumeryItemById(id).then((respond)=>{
        res.send(respond);
    }).catch((err)=>{
        res.json({categoryindexerror : err});
    })
}

module.exports = {
    postCreateParfumery,
    getCreateParfumery,
    getPerfumes,
    getParfumeryItem
}
