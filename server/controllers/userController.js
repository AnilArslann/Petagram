const bcrypt = require('bcrypt');
const crypto = require('crypto');
const User = require('../models/User');

const registerUser=async (req,res)=>{
    const username=req.body?.username;
    const email=req.body?.email;
    const password=req.body?.password;
    console.log('Register User: ', req.body);
    bcrypt.hash(password, 10)
    .then(
        (hash)=>{
            const user=new User({
                username,
                email,
                password:hash,
                emailToken: crypto.randomBytes(64).toString('hex')
            }
            );
            user.save()
            .then((user)=>{
                res.json(user);
            }
            )
            .catch((err)=>{
                res.status(500).json(err);
            }
            );
        })
};

const loginUser=async (req,res)=>{
    User.findOne({username:req.body.username})
    .then((user)=>{
        if(user){
            bcrypt.compare(req.body.password, user.password,(err,result)=>{
                if(result){
                    res.json(user);
                }
                else{
                    res.status(404).json({message:'Invalid Password'});
                }
            })
        }
        else{
            res.status(404).json({message:'User not found'});
        }
    }

    )
    .catch((err)=>{
        res.status(500).json(err);
    }
    );

};

const verifyEmail= async (req,res)=>{
    try{
     
        const emailToken=req.body.emailToken;
        if(!emailToken){
            return res.status(404).json({message:'Email Token Not Found'});

        }
        console.log('Verify Email: ', emailToken)
        const user= await User.findOne({emailToken:emailToken})
        .then((user)=>{
            if(user&&!user.isVerified){
                user.isVerified=true;
                user.save()
                .then((user)=>{
                    res.json(user);
                }
                )
                .catch((err)=>{
                    res.status(404).json(err);
                }
                );
            }
            else if (user.isVerified){
                res.json({message:'Email is already verified'});
            }
            else{
                res.status(404).json({message:'User not found'});
                console.log('User not found');
            }
        })
    }
    catch(err){
        console.log('Verify Email Error: ', err);
    }
};

module.exports={registerUser,loginUser,verifyEmail};
