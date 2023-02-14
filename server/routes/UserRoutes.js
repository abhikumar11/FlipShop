const express = require("express");
const{authController,getUser,registerUser}=require("../controllers/UserControlller");
const {protect}=require("../middleware/AuthMiddleWare");
const router = express.Router();

router.post("/login",authController);

router.route("/profile").get(getUser);

router.route("/").post(registerUser);
module.exports=router;