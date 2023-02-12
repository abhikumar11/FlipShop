const jwt=require("json-web-token");
const User=require("../schema/UserSchema");
const asyncHandler=require("express-async-handler");
const protect=asyncHandler((req,res,next)=>
{
    let token;
    if(req.headers.authorization.startsWith("Bearer"))
    try {
        token=req.headers.authorization.split(" ")[1];
        const decode=jwt.verify(token,process.env.JWT_KEY);
        next();
    } catch (error) {}
    if(!token)
    {
        res.status(401);
        throw new Error("Not authorized");
    }
});

module.exports=protect;