const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
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