
const bcrypt = require("bcryptjs");
const Users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin@123", 10),
    isAdmin: true,
  },
  {
    name: "Vikas",
    email: "vikas@example.com",
    password: bcrypt.hashSync("vikas@123", 10),
  },
  {
    name: "Abhishek",
    email: "abc@example.com",
    password: bcrypt.hashSync("abc@123", 10),
  },
];
module.exports = Users;