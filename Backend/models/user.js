const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
require('dotenv').config();

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    middleName:{
        type:String,
        required:false
    },

    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    country:{
        type:String,
        required:true
    },

    State:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    zip:{
        type:Number,
        required:true
    },

    dob:{
        type:Date,
        required:true
    },

    password:{
        type:String,
        required:true,
    }
})

userSchema.pre('save',async function(next){  //pre middleware for pasword hashing
    try{
        let userData=this;
        if(userData.isModified('password')){
            const salt=await bcrypt.genSalt(Number(process.env.saltRound));

            const hashedPassword=await bcrypt.hash(this.password,salt);

            this.password=hashedPassword;

            next();
        }else{
            console.log("Password is not modified !");
            next();
        }
    }catch(err){
        console.log("Some error occured while doing the job");
        next(err);
    }
})

userSchema.methods.isCheckValidPassword=async function(password){  //function to check weather the given password is correct or not
    try{
        const compare=await bcrypt.compare(password,this.password);
        return compare;
    }catch(err){
        return err;
    }
}

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;