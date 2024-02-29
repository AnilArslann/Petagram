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
emailToken: { type: String },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },
createdPartition:{type:String},
loginPartitions:[{type:String,default:[]}]});
const User = mongoose.model('User', userSchema);
module.exports=User;