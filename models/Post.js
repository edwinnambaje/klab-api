const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:'User'
    },
    created:{
        type:Date,
        default:Date.now
    },
    likes:{
        type:ObjectId,
        ref:'User'
    },
    comment:[
        {
        text:String,
        created:{type:Date,default:Date.now},
        postedBy:{type:ObjectId,ref:'User'}
        }
    ]
})
module.exports=mongoose.model('Post',PostSchema);