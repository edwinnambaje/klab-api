const mongoose=require('mongoose');
const PostSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    image:{
        type:String,
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
    },
    likedby:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
},{timestamps:true})
module.exports=mongoose.model('Post',PostSchema);