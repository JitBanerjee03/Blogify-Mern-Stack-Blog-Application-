const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_LOCAL_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});

const db=mongoose.connection;

db.on('connected',()=>console.log('Database Connected!'));
db.on('disconnected',()=>console.log('Database disconnected!'));
db.on('close',()=>console.log('Database closed!'));

module.exports=db;