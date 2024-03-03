const express=require('express');
const router=express.Router();

const {registerUser,loginUser,verifyEmail,getUserByMail}=require('../controllers/userController');
router.post('/signup',registerUser);
router.post('/login',loginUser);
router.post('/verify-email',verifyEmail);
router.post('/mail',getUserByMail);

module.exports=router;