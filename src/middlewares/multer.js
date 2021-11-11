const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'src/upload/')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

const upload = multer ({
    storage: storage,
    filename: function (req, file, callback){
       if( file.mimetype == "image/jpeg" || file.mimetype == "image/png"){
           callback(null, true)
       } else {
           console.log('jpg / png')
           callback(null, false)
       }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;
