
const User = require("../schema/UserSchema");
const asyncHandler = require("express-async-handler");
const generateToken=require("../tokens/GenerateToken");
const authController=asyncHandler(async (req, res) => {
  const{email,password}=req.body;
   const user=await User.findOne({email});
   if(user&&(await user.matchPassword(password)))
   {
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
      token:generateToken(user._id),
    })
   }
   else
   {
        res.status(401);
        throw new Error("Invalid username or password");
   }
})

const getUser=asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user)
  {
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
    })
  }
  else{
    res.status(401);
    throw new Error("user not found");
  }
})
const registerUser=asyncHandler(async(req,res)=>{
  const {name,email,password}=req.body;
  const exist=await User.findOne({email});
  if(exist)
  {
    res.status(400);
    throw new Error("User already exists");
  }
  else{
    const user=await User.create({name,email,password});
    if(user)
    {
      res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user._id),
      });
    }
    else{
      res.send(404);
      throw new Error("User not found");
    }
  }
})

const updateUser=asyncHandler(async(req,res)=>{
  const user=await User.findById(req.user._id);
  if(user)
  {
    user.name=req.body.name||user.name;
    user.email=req.body.email||user.email;
    if(req.body.password)
    {
      user.password=req.body.password;
    }
    const update=await user.save();
    res.json({
      _id:update._id,
      name:update.name,
      email:update.email,
      isAdmin:update.isAdmin,
      token:generateToken(update._id),
    })
  }
  else{
    res.status(404);
    throw new Error("update failed");
  }
})
module.exports ={authController,getUser,registerUser,updateUser};