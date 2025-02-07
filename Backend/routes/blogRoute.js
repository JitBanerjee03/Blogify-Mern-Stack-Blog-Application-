const express=require('express');
const blog=require('../models/blog');
const user=require('../models/user');
const multer=require('multer');
const uploadMiddleWare = multer({ dest: 'uploads/' })
const fs=require('fs');
const jwt=require('jsonwebtoken');
const { tokenValidation } = require('../Auth');
const { default: mongoose } = require('mongoose');
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

router.put('/upVoteBlog',tokenValidation,async(req,res)=>{  //end point to upvote a particular Blog
    try{
        const blogData=await blog.findOne({_id:req.body.id});
        if(!blogData){
            res.status(404).json('Resourse does not exists !');
        }else{
            const index=blogData.upVotedBy.findIndex(votes => votes.userId.equals(req.user.id));
            if(index!==-1){
                res.status(400).json('Can upvote only once');
                return ;
            }else{
                const noUpvotes=blogData.noOfUpVotes+1;
                blogData.upVotedBy.push({userId:req.user.id});
                const indexDownVote=blogData.downVotedBy.findIndex(votes=>votes.userId.equals(req.user.id));
                if(indexDownVote!==-1){
                    blogData.downVotedBy.splice(indexDownVote,1);
                    const downVotes=blogData.noOfDownVotes-1;
                    
                    await blog.findByIdAndUpdate(blogData._id,{
                        noOfUpVotes:noUpvotes,
                        noOfDownVotes:downVotes,
                        upVotedBy:blogData.upVotedBy,
                        downVotedBy:blogData.downVotedBy
                    },{
                        new : true,
                        runValidators:true
                    })

                    res.status(200).json('Ok');
                }else{
                    await blog.findByIdAndUpdate(blogData._id,{
                        noOfUpVotes:noUpvotes,
                        upVotedBy:blogData.upVotedBy
                    })

                    res.status(200).json('ok');
                }
            }
        }
    }catch(err){
        res.status(500).json('Internal Server Error');
    }
})

router.put('/downVoteBlog',tokenValidation,async(req,res)=>{  //end point to downvote a particular Blog
    try{

        const blogData=await blog.findOne({_id:req.body.id});

        if(!blogData){
            res.status(404).json('Resourse does not exists !');
        }else{
            const index=blogData.downVotedBy.findIndex(votes=>votes.userId.equals(req.user.id));

            if(index!==-1){
                res.status(400).json('Can downvote only once');
            }else{
                const noOfDownVotes=blogData.noOfDownVotes+1;
                blogData.downVotedBy.push({userId:req.user.id});

                const indexUpVote=blogData.upVotedBy.findIndex(votes=>votes.userId.equals(req.user.id));

                if(indexUpVote!==-1){
                    blogData.upVotedBy.splice(indexUpVote,1);
                    const noOfUpVotes=blogData.noOfUpVotes-1;

                    await blog.findByIdAndUpdate(blogData._id,{
                        noOfUpVotes:noOfUpVotes,
                        noOfDownVotes:noOfDownVotes,
                        upVotedBy:blogData.upVotedBy,
                        downVotedBy:blogData.downVotedBy
                    },{
                        new : true,
                        runValidators:true
                    })

                    res.status(200).json('Ok');
                }else{
                    await blog.findByIdAndUpdate(blogData._id,{
                        noOfDownVotes:noOfDownVotes,
                        downVotedBy:blogData.downVotedBy
                    })

                    res.status(200).json('ok'); 
                }
            }
        }
    }catch(err){
        res.status(500).json('Internal Server Error');
    }
})

module.exports=router;
