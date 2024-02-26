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
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);