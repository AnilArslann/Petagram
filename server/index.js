const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const port=3000;
const User=require('./models/User');
const bcrypt=require('bcrypt');
const crypto=require('crypto');

require('dotenv').config();
app.use(cors());
app.use(express.json());


const userRoute = require("./Routes/userRoute");
app.use("/api/user", userRoute);

mongoose.connect('mongodb://localhost:27017/Petagram');


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);