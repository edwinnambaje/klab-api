const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    blogs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
      ],
},{timestamps:true})

module.exports=mongoose.model('User',UserSchema);