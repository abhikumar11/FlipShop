const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
     {
          name: {
               type: String,
               required: true,
          },
          rating: {
               type: Number,
               required: true,
          },
          comment: {
               type: String,
               required: true,
          },
     },
     { timestamps: true }
);

const ProductSchema = new mongoose.Schema({
     User: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
     },
     name: {
          type: String,
          required: true,
     },
     productimage: {
          type: String,
          required: true,
     },
     brandname: {
          type: String,
          required: true,
     },
     category: {
          type: String,
          required: true,
     },
     description: {
          type: String,
          required: true,
     },
     reviews: [ReviewSchema],
     rating: {
          type: Number,
          required: false,
     },
     numreviews: {
          type: Number,
          required: true,
     },
     price: {
          type: Number,
          required: true,
     },
     stock: {
          type: Number,
          required: true,
     },
});
const Product = mongoose.model("Product", ProductSchema);
export default Product;
