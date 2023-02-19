const express = require("express");
const addOrderItem=require("../controllers/OrderController");
const protect=require("../middleware/AuthMiddleWare");
const router = express.Router();

router.route("/").post(addOrderItem);

module.exports = router;