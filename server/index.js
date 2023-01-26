const express = require("express");
const dotenv=require('dotenv');
const app = express();
const product = require("./ProductData");
const mongoose = require('mongoose');
dotenv.config();
const port=process.env.PORT;
app.get("/products", (req, res) => {
     res.json(product.product);
});

app.get("/product/:id", (req, res) => {
 const pro=product.product.find(e=>e._id===req.params.id)
 res.json(pro);
});

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
});
