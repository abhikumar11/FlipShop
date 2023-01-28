const express = require("express");
const Product = require("../schema/ProductSchema");
const asyncHandler = require("express-async-handler");
const router = express.Router();

router.get(
     "/products",
     asyncHandler(async (req, res) => {
          const pro = await Product.find({});
          res.json(pro);
     })
);

router.get(
     "/product/:id",
     asyncHandler(async (req, res) => {
          const pro = await Product.findById(req.params.id);
          if (pro) {
               res.json(pro);
          } else {
               res.status(404).json({ message: "Product not found" });
          }
     })
);

module.exports = router;
