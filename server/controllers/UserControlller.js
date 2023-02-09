const User = require("../schema/UserSchema");
const asyncHandler = require("express-async-handler");

const authController=asyncHandler(async (req, res) => {
  const{email,password}=res.body;
    res.send({
        email,
        password
    });
})
module.exports =authController;