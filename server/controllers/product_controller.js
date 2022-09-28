
const {loadDataForIndex, createProductPost} = require('../services/product_service');

const getIndex = (req, res) => {
    res.set('Access-Control-Allow-Origin','*');
    loadDataForIndex().then((respond)=>{
        res.send(respond);
    }).catch((err)=>{
        res.json({categoryindexerror : err});
    })
}

const getCreateProduct = (req, res) =>{
    res.json({create_Product_Get:'Create Product get Page'})
}

const postCreateProduct = (req, res) => {
    createProductPost().then((respond)=>{
        res.json({creatingProduct_Post : respond});
    }).catch((err)=>{
        res.json({creatingProductError_Post : err});
    })
}

module.exports = {
    getIndex,
    postCreateProduct,
    getCreateProduct
}
