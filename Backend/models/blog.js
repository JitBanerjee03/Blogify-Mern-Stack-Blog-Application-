const mongoose=require('mongoose');

const blogSchema=mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    summary:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    content:{
        type:String,
        required:true
    },
    
    coverFilePath:{
        type:String
    },

    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

    postedAt:{
        type:Date,
        default:Date.now,
        required:true
    },

    noOfUpVotes:{
        type:Number,
        default:0,
        required:false
    },

    noOfDownVotes:{
        type:Number,
        default:0,
        required:false
    }
})

const blogModel=mongoose.model('blog',blogSchema);

module.exports=blogModel;