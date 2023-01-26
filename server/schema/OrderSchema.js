const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
     {
          user: {
               type: mongoose.Schema.Types.ObjectId,
               required: true,
               ref: "User",
          },
          orderitems: [
               {
                    name: {
                         type: String,
                         required: true,
                    },
                    qty: {
                         type: Number,
                         required: true,
                    },
                    image: {
                         type: String,
                         required: true,
                    },
                    price: {
                         type: Number,
                         required: true,
                    },
                    product: {
                         type: mongoose.Schema.Types.ObjectId,
                         required: true,
                         ref: "Product",
                    },
               },
          ],
          shippingaddress: {
               address: {
                    type: String,
                    required: true,
               },
               city: {
                    type: String,
                    required: true,
               },
               postalcode: {
                    type: String,
                    required: true,
               },
               country: {
                    type: String,
                    required: true,
               },
          },
          paymentmethod: {
               type: String,
          },
          paymentresult: {
               id: {
                    type: String,
               },
               status: {
                    type: String,
               },
               uploadstatus: {
                    type: String,
               },
               emailaddress: {
                    type: String,
               },
          },
          taxprice: {
               type: Number,
               required: true,
               defualt: 0.0,
          },
          shippingprice: {
               type: Number,
               required: true,
               default: 0.0,
          },
          totalprice: {
               type: Number,
               required: true,
               default: 0.0,
          },
          ispaid: {
               type: Boolean,
               required: true,
               default: false,
          },
          paidat: {
               type: Date,
          },
          isdeliverd: {
               type: Boolean,
               required: true,
               default: false,
          },
          deliverat: {
               type: Date,
          },
     },
     { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports.Order = Order;
