const jwt=require("json-web-token");
const User=require("../schema/UserSchema");

const protect=async(req,res,next)=>
{
    let token;
    console.log(req.headers.authorization);
    next();
}

module.exports=protect;