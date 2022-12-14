
const {loadProduct,
        createParfumeryPost,
        createMakeupPost, 
        createAccessoriesPost,
        getProductItemByIdFromMakeup, 
        getProductItemByIdFromParfumery,    
        getProductItemByIdFromAccessories,
        loadProductsForSeach
    } = require('../services/product_service');

//Load All Product Data
const getIndex = (req, res)=>{
    loadProduct().then((respond)=>{
        res.status(200).send(respond);
    }).catch((err)=>{
        res.status(500).json({'error':err});
    })
}

//Load Search Products 
const getSearch = (req, res) =>{
    console.log('search val : ', req.query.value);
    loadProductsForSeach(req.query.value).then((respond)=>{
        res.status(200).send(respond);
    }).catch((err)=>{
        res.status(500).json({'error':err});
    })
}

//Get Create Product Page
const getCreateProduct = (req, res) =>{
    res.json({create_Product_Get:'Create Product get Page'});
}
const postCreateProduct = (req, res) => {
    console.log('file is : ',req.file);
    req.body.file = req.file.originalname;
    //Catalog === Makeup this will work
    if(req.body.catalog === 'Makeup'){
        console.log('neter make up');
        createMakeupPost(req.body).then((respond)=>{
            res.json({creatingProduct_Post : respond});
        }).catch((err)=>{
            res.json({creatingProductError_Post : err});
        })
    }
    //If Catalog === Perfume this will work
    else if(req.body.catalog === 'Perfume'){
        createParfumeryPost(req.body).then((respond)=>{
            res.json({creatingProduct_Post : respond});
        }).catch((err)=>{
            res.json({creatingProductError_Post : err});
        })
    }
    //If Vatalog === Accessories accessories create post will work
    else if(req.body.catalog === 'Accessories'){
        createAccessoriesPost(req.body).then((respond)=>{
            res.json({creatingProduct_Post : respond});
        }).catch((err)=>{
            res.json({creatingProductError_Post : err});
        })
    }
    
}
//Get One Product Item
const getParfumeryItem = (req, res) => {
    const catalog_name = req?.query?.catalog;
    console.log('catalog name : ',catalog_name);
    const id = req.params.id;
    if(catalog_name === "Perfume"){
        getProductItemByIdFromParfumery(id).then((respond)=>{
            res.send(respond);
        }).catch((err)=>{
            res.json({categoryindexerror : err});
        })
    }   
    else if(catalog_name === "Makeup"){
        getProductItemByIdFromMakeup(id).then((respond)=>{
            res.send(respond);
        }).catch((err)=>{
            res.json({categoryindexerror : err});
        })
    }
    else if(catalog_name === "Accessories"){
        getProductItemByIdFromAccessories(id).then((respond)=>{
            res.send(respond);
        }).catch((err)=>{
            res.json({categoryindexerror : err});
        })
    }
}

module.exports = {
    getIndex,
    getCreateProduct,
    postCreateProduct,
    getParfumeryItem,
    getSearch
}