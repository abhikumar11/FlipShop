const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Users=require('./TestData');
const User=require('./schema/UserSchema');
const Order=require('./schema/OrderSchema');
const Product=require('./schema/ProductSchema');
const product = require('./ProductData');
const connectDb  = require('./DatabaseConnection');
dotenv.config();

const insertData=async()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const newUser=await User.insertMany(Users);
        const admin=newUser[0]._id
        const data=product.product.map((item)=>{
            return {...item,User:admin}
        })
        await Product.insertMany(data);
        console.log("data inserted");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
const deleteData=async()=>{
  
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
};
