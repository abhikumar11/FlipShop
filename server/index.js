const express = require("express");
const dotenv=require('dotenv');
const app = express();
const product = require("./ProductData");
const mongoose = require('mongoose');

const connectDb=async()=>
{
     try {
         const conn=await mongoose.connect(process.env.CONNECTITON_URL); 
         console.log('Connected to database',conn.connection.host);
     } catch (error) {
         console.error(error.message); 
         process.exit(1);
     }
}

dotenv.config();
mongoose.set('strictQuery',false);
connectDb();
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
