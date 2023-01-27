const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Users=require('./TestData');
const User=require('./schema/UserSchema');
const Order=require('./schema/OrderSchema');
const Product=require('./schema/ProductSchema');
const product = require('./ProductData');
const connectDb  = require('./DatabaseConnection');
dotenv.config();

