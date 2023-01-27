const mongoose = require('mongoose');
const connectDb=async()=>
{
     try {
         const conn=await mongoose.connect(process.env.CONNECTITON_URL); 
         console.log('Connected to database',conn.connection.host);
     } catch (error) {
         console.error(error.message); 
         process.exit(1);
     }
}
mongoose.set('strictQuery',false);
module.exports=connectDb;