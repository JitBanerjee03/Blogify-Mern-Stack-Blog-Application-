const express=require('express');
const blog=require('../models/blog');

const router=express.Router();

router.get('/getAllBlogs',async(req,res)=>{  //end point to get all blog data
    try{
        const responseData=await blog.find();

        responseData.status(200).json(responseData);
    }catch(err){
        res.status(500).json('Internal server Error');
    }
})



module.exports=router;
