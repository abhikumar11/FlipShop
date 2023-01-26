const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
     {
          name: { String, required: true },
          email: { String, required: true },
          password: { String, required: true },
          isAdmin: { Boolean, required: true, default: false },
     },
     { timestamps: true }
);
const User=mongoose.model('User',userSchema);
export default User;