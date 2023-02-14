const express = require("express");
const{authController,getUser,registerUser, updateUser}=require("../controllers/UserController");
const protect=require("../middleware/AuthMiddleWare");
const router = express.Router();

router.post("/login",authController);

router.route("/profile").get(protect,getUser).put(protect,updateUser);

router.route("/").post(registerUser);


module.exports=router;