const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const port=3000;
const User=require('./models/User');
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/Petagram');

app.post('/signup',(req,res)=>{
    console.log('Signup Request: ', req.body);
 
    const user=new User(req.body);
    user.save()
    .then((user)=>{
        res.json(user);
    }
    )
    .catch((err)=>{
        res.json(err);
    }
    );
}
);
app.post('/login',(req,res)=>{
    console.log('Login Request: ', req.body);
    User.findOne({username:req.body.username})
    .then((user)=>{
        if(user){
            if(user.password===req.body.password){
                res.json(user);
            }
            else{
                res.json({message:'Invalid Password'});
            }
        }
        else{
            res.json({message:'User not found'});
        }
    }
    
    )

}
)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);