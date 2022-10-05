
const {loadProduct, createParfumeryPost, getProductItemById} = require('../services/product_service');

//Load All Product Data
const getIndex = (req, res)=>{
    loadProduct().then((respond)=>{
        res.status(200).json({'respond':respond});
    }).catch((err)=>{
        res.status(500).json({'error':err});
    })
}
//Get Create Product Page
const getCreateProduct = (req, res) =>{
    res.json({create_Product_Get:'Create Product get Page'});
}
//Post Create Product Page
const postCreateProduct = (req, res) => {
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
    getProductItemById(id).then((respond)=>{
        res.send(respond);
    }).catch((err)=>{
        res.json({categoryindexerror : err});
    })
}

module.exports = {
    getIndex,
    getCreateProduct,
    postCreateProduct,
    getParfumeryItem,
}