const express = require("express");
const dotenv=require('dotenv');
const products = require("./ProductData");
const mongoose = require('mongoose');
const connectDb=require('./DatabaseConnection');
const ProductRouter=require("./routes/ProductRoutes");
const{errorHandler}=require("./messages/ErrorMessage");
const UserRouter=require("./routes/UserRoutes");
dotenv.config();
connectDb();
const app = express();
app.use(express.json());
const port=process.env.PORT;
 
app.get('/',(req,res)=>{
     res.send('<h1>Welcome</h1>');
})
app.use("/",ProductRouter);
//app.use("/user",UserRoutes);
app.use(errorHandler);

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
});
