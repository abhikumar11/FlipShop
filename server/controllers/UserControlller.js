
const User = require("../schema/UserSchema");
const asyncHandler = require("express-async-handler");

const authController=asyncHandler(async (req, res) => {
  const{email,password}=res.body;
   const user=await User.findOne({email});
   if(user&&(await user.matchPassword(password)))
   {
    res.json({
      _id:User._id,
      name:User.name,
      email:User.email,
      isAdmin:User.isAdmin,
      tocken:null,
    })
   }
   else
   {
        res.status(401);
        throw new Error("Invalid username or password");
   }
})
module.exports =authController;