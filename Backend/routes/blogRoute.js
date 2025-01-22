const express=require('express');
const blog=require('../models/blog');
const user=require('../models/user');
const multer=require('multer');
const uploadMiddleWare = multer({ dest: 'uploads/' })
const fs=require('fs');
const jwt=require('jsonwebtoken');
require('dotenv').config();

const router=express.Router();

router.get('/getAllBlogs',async(req,res)=>{  //end point to get all blog data
    try{
        const responseData=await blog.find().populate('postedBy',['firstName']).sort({postedAt:-1});
        res.status(200).json(responseData);
    }catch(err){
        res.status(500).json('Internal server Error');
    }
})

router.post('/postBlog',uploadMiddleWare.single('fileData'),async(req,res)=>{  //endpoint to store a blog post in the database
    try{
        
        const cookies=req.cookies;
        if(!cookies){
            res.status(401).json('unauthorised Access');
        }

        const payLoad=await jwt.verify(cookies.token,process.env.JWT_SECKET_KEY);

        if(!payLoad){
            res.status(401).json('unauthorised Access');
        }else{
            const isValidUser=await user.findOne({email:payLoad.email});

            if(!isValidUser){
                res.status(401).json('unauthorised Access');
            }else{
                const {originalname,path}=req.file;
                const newPath='uploads\\'+originalname;
                fs.renameSync(path,newPath);

                const blogData=new blog();

                blogData.title=req.body.Title;
                blogData.summary=req.body.Summary;
                blogData.category=req.body.Category;
                blogData.content=req.body.Content;
                blogData.postedBy=isValidUser._id;
                blogData.postedAt=Date.now();
                blogData.coverFilePath=newPath;
                const responseData=await blogData.save();

                res.status(200).json(blogData);
            }
        }
    }catch(err){
        res.status(500).json('Internal Error from the server!');
    }
})

router.get('/getAllBlogs/:blogType',async(req,res)=>{  //end point to get blogs of particular category
    try{
        const responseData=await blog.find({category:req.params.blogType}).sort({postedAt:-1});
        res.status(200).json(responseData);
    }catch(err){
        res.status(500).json('Internal server error !');
    }
})

module.exports=router;
