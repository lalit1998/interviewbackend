var express = require("express");
var router = express.Router();
var Create = require("../model/create_model");
var multer=require('multer');
var path=require('path');
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'public/images/user')
    },
    filename1:(req,file,cb)=>{
      x=file.fieldname+'-'+Date.now()+path.extname(file.originalname);
      cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
  });
  var upload=multer({storage:storage});
router.post('/',upload.single('file'),function(req, res, next) {
    Create.addUser(req.body,req.file.filename,function(err, rows) {
      if (err) {
        
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;