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
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    author: {
        type: String,
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes:{
        type:Number,
        default:0
    }
},{timestamps:true})
module.exports=mongoose.model('Post',PostSchema);