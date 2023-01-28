const express = require("express");
const dotenv=require('dotenv');
const app = express();
const products = require("./ProductData");
const mongoose = require('mongoose');
const connectDb=require('./DatabaseConnection');
const ProductRouter=require("./routes/ProductRoutes");
dotenv.config();
connectDb();
const port=process.env.PORT;
 
app.get('/',(req,res)=>{
     res.send('<h1>Welcome</h1>');
})
app.use(ProductRouter);


app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
});
