const express = require("express");
const{authController}=require("../controllers/UserControlller");

const router = express.Router();

router.post("/login",function(req,res){
    authController;
});

module.exports=router;