const express=require('express');
const router=express.Router();
const category=require('../models/category');

router.post('/',async(req,res)=>{
    try{
        const newCategory=new category(req.body);
        const responseData=await newCategory.save();
        res.status(200).json(responseData);
    }catch(err){
        res.status(500).json('Internal error form the erver side');
    }
})

router.get('/',async(req,res)=>{
    try{

        const responseData=await category.find();
        res.status(200).json(responseData);
    }catch(err){
        res.status(500).json('Internal error form the erver side');
    }
})
module.exports=router