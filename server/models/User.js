const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
isVerified: { type: Boolean, default: false },
emailToken: { type: String }});
const User = mongoose.model('User', userSchema);
module.exports=User;