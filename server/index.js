const express = require("express");
const app = express();
const port = 5000;
const product = require("./ProductData");

app.get("/", (req, res) => {
     res.send("Hello World");
});

app.get("/products", (req, res) => {
     res.json(product);
});

app.get("/products/:id", (req, res) => {
 const pro=product.product.find(e=>e._id===req.params.id)
 res.json(pro);
});
app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
});
