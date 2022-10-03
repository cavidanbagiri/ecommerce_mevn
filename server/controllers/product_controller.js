
const {loadDataForIndex, createProductPost, loadParfumeries, getProductItemById} = require('../services/product_service');

//Load Data For Index page
const getIndex = (req, res) => {
    loadDataForIndex().then((respond)=>{
        res.send(respond);
    }).catch((err)=>{
        res.json({categoryindexerror : err});
    })
}
//Get All Perfumes
const getPerfumes = (req, res) => {
    loadParfumeries().then((respond) => {
        res.send(respond);
    }).catch((err)=>{
        res.json({categoryindexerror : err});
    })
    
}
//Get Create Product Page
const getCreateProduct = (req, res) =>{
    res.json({create_Product_Get:'Create Product get Page'})
}
//Post Create Product Page
const postCreateProduct = (req, res) => {
    req.body.file = req.file.originalname;
    createProductPost(req.body).then((respond)=>{
        res.json({creatingProduct_Post : respond});
    }).catch((err)=>{
        res.json({creatingProductError_Post : err});
    })
}
//Get One Product Item
const getProductItem = (req, res) => {
    const id = req.params.id;
    getProductItemById(id).then((respond)=>{
        res.send(respond);
    }).catch((err)=>{
        res.json({categoryindexerror : err});
    })
}

module.exports = {
    getIndex,
    postCreateProduct,
    getCreateProduct,
    getPerfumes,
    getProductItem
}
