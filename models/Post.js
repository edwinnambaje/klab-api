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
    // likes:[{
    //    id:String,
    //    nbr:{type:Number,default:0}
    // }],
},{timestamps:true})
module.exports=mongoose.model('Post',PostSchema);