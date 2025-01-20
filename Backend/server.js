const express=require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app=express();
const db=require('./db');
app.use(cookieParser())
app.use(cors({credentials:true,origin:'http://localhost:5173'}));
const bodyParser=require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    try{
        res.send("Hello from the server side!");
    }catch(err){
        res.json({message:"Error from the server end!"});
    }
})

//importing userRoute
const userRoute=require('./routes/userRoute')
app.use('/user',userRoute);

//importing categoryRoute
const categoryroute=require('./routes/categoryRoute');
app.use('/addcategory',categoryroute);

app.listen(3000,()=>{
    console.log('Server is live now!');
})