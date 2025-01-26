const express=require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app=express();
const db=require('./db');

app.use(cookieParser())
app.use(cors({credentials:true,origin:'http://localhost:5174'}));
const bodyParser=require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use('/uploads',express.static(__dirname+'/uploads'));
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
const categoryRoute=require('./routes/categoryRoute');
app.use('/addcategory',categoryRoute);

//importing categoryRoute
const blogRoute=require('./routes/blogRoute');
app.use('/blog',blogRoute);

app.listen(3000,()=>{
    console.log('Server is live now!');
})