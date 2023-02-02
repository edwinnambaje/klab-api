const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    likes: { 
        type:Number, 
        default:0
    },
})
module.exports=mongoose.model('Post',PostSchema);