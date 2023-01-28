const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
     {
          name: {
               type: String,
               
          },
          rating: {
               type: Number,
               
          },
          comment: {
               type: String,
               
          },
     },
     { timestamps: true }
);

const ProductSchema = new mongoose.Schema({
     User: {
          type: mongoose.Schema.Types.ObjectId,
          
          ref: "User",
     },
     name: {
          type: String,
          
     },
     image: {
          type: String,
          
     },
     brand: {
          type: String,
          
     },
     category: {
          type: String,
          
     },
     description: {
          type: String,
          
     },
     reviews: [ReviewSchema],
     rating: {
          type: Number,
          required: false,
     },
     numReviews: {
          type: Number,
          
     },
     price: {
          type: Number,
          
     },
     countInStock: {
          type: Number,
          
     },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports=Product;
