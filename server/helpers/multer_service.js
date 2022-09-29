const multer = require('multer');
const path = require("path");

const mystorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/avatars'));
    },
    filename: function (req, file, cb) {
        console.log("file from multer : ",file);
        const uniqueSuffix = path.extname(file.originalname);
        cb(null, 's'+uniqueSuffix)
    }
})

const myFileFilter = (req, file, cb)=>{
    if(file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}   

console.log('multer work');


const upload = multer({storage: mystorage, fileFilter: myFileFilter});

module.exports = upload;
