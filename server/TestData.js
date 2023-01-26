const bcrypt = require('bcryptjs');
const User=[
    {
        name:'admin',
        email:'admin@example.com',
        password:bcrypt.hashSync('admin@123',10),
        isAdmin: true,
    },
    {
        name:'vikas',
        email:'vikas@example.com',
        password:bcrypt.hashSync('vikas@123',10),
    },
    {
        name:'abhishek',
        email:'abc@example.com',
        password:bcrypt.hashSync('abc@123',10),
    },
]