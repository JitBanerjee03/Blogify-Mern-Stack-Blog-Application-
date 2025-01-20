const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({
    categoryType:{
        type:String,
        unique:true
    }
});

const categoryModel=mongoose.model('category',categorySchema);
module.exports=categoryModel;
