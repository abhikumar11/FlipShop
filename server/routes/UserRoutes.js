const express = require("express");
const{authController,getUser}=require("../controllers/UserControlller");

const router = express.Router();

router.post("/login",() =>{authController});

router.route("/profile").get(getUser);
module.exports=router;