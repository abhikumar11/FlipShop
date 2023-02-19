const Order = require("../schema/OrderSchema");
const asyncHandler = require("express-async-handler");

const addOrderItem = asyncHandler(async (req, res) => {
     const {
          orderItems,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
     } = req.body;
     if (orderItems && orderItems == 0) {
          res.status(400);
          throw new Error("No order items");
          return;
     } else {
          const order = new Order({
               orderItems,
               user:req.user._id,
               shippingAddress,
               paymentMethod,
               itemsPrice,
               taxPrice,
               shippingPrice,
               totalPrice,
          });
          const createOrder = await Order.save();
          res.status(200).json(createOrder);
     }
});
module.exports = addOrderItem;