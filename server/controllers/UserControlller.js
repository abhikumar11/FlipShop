
const User = require("../schema/UserSchema");
const asyncHandler = require("express-async-handler");
const generateToken=require("../tokens/GenerateToken");
const authController=asyncHandler(async (req, res) => {
  const{email,password}=res.body;
   const user=await User.findOne({email});
   if(user&&(await user.matchPassword(password)))
   {
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
      tocken:generateToken(user._id),
    })
   }
   else
   {
        res.status(401);
        throw new Error("Invalid username or password");
   }
})

const getUser=asyncHandler(async (req, res) => {
  res.send("Sucessfully logged in");
})

module.exports ={authController,getUser};