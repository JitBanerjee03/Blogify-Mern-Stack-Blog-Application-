const express=require('express')
const user=require('../models/user');
const router=express.Router();
const {generatesessionToken,tokenValidation}=require('../Auth');
const jwt=require('jsonwebtoken');
router.post('/signup',async(req,res)=>{  //middleware to add new user in the database
    try{

        const newUser=await new user(req.body);
        const responseData=await newUser.save();

        res.status(200).json('ok');
    }catch(err){
        res.status(500).json({error:"Internal Server Error !"})
    }
})

router.post('/login',async(req,res)=>{  //middleware for login for a particular user
    try{
       
        const isValidUser=await user.findOne({email:req.body.email});
        if(!isValidUser){
            res.status(401).json({message:"Unauthorised Access !"});
        }else{
            const isValidUserPassword=await isValidUser.isCheckValidPassword(req.body.password);
            if(!isValidUserPassword){
                console.log("Incorerct Password Access denied !");
                res.status(401).json({message:"Unauthorised Access !"});
            }else{
                const payLoad={
                    id:isValidUser._id,
                    email:isValidUser.email,
                    user:isValidUser.firstName
                }
                const jwtToken=await generatesessionToken(payLoad);
                res.cookie('token', jwtToken).json({ message: 'ok' });
            }
        }
    }catch(err){
        res.status(500).json({error:"Internal Server Error !"})
    }
})

router.get('/profile',tokenValidation,async(req,res)=>{  //protected route for the validating the token from cookies and give response according to it
    try{
        const payLoad=req.user;
        const isValidUser=await user.findOne({email:payLoad.email});
        if(!isValidUser){
            res.status(401).json('Unauthorised Access');
        }else{
            res.status(200).json(payLoad.user);
        }
    }catch(err){
        res.status(500).json({message:"error form the server side"});
    }
})

router.get('/logout',tokenValidation,async(req,res)=>{  //end point for logout functionality
    try{
        const payLoad=req.user;
        const isValidUser=await user.findOne({email:payLoad.email});
        if(!isValidUser){
            res.status(401).json('Invalid Session Token');
        }else{
            res.clearCookie('token');
            res.status(200).json('ok');
        }
    }catch(err){
        res.status(500).json('internal Server Error');
    }
})

router.get('/getUser',tokenValidation,async(req,res)=>{  //protected route for the validating the token from cookies and give response according to it
    try{
        const payLoad=req.user;
        const isValidUser=await user.findOne({email:payLoad.email});
        if(!isValidUser){
            res.status(401).json('Unauthorised Access');
        }else{
            res.status(200).json(isValidUser);
        }
    }catch(err){
        res.status(500).json({message:"error form the server side"});
    }
})
module.exports=router;