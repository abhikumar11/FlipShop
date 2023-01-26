const express = require("express");
const app = express();
const port = 5000;
const product = require("./ProductData");

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
