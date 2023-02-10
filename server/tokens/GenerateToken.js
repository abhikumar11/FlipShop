const jwt =require("json-web-token");

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,
        {
            expiresIn:"15d"
        }
    );
}
module.exports =generateToken;