const jwt=require('jsonwebtoken');
require('dotenv').config();

const generatesessionToken=async(payload)=>{
    try{
        const token=await jwt.sign(payload,process.env.JWT_SECKET_KEY)
        return token;
    }catch(err){
        return err;
    }
}

const tokenValidation=async(req,res,next)=>{
    try{
        const cookies=req.cookies;
        if(!cookies){
            console.log('Hi');
            res.status(401).json('unauthorised Access');
        }else{
            const payLoad=await jwt.verify(cookies.token,process.env.JWT_SECKET_KEY);
            req.user=payLoad;
            next();
        }
    }catch(err){
        res.status(500).json({message:"Error form the server side"});
    }
}
module.exports={generatesessionToken,tokenValidation};