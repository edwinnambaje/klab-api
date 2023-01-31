
const Post=require('../models/Post');
exports.create=async(req,res)=>{
    try {
        const post= new Post({
            title:req.body.title,
            description:req.body.description,
            image:req.body.image
        })
        await post.save();
        res.status(200).json({message:"Post created",data:post})
    } catch (error) {
        res.status(401).json({message:error})
    }
}
exports.getById=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        res.status(200).json({data:post})
    } catch (error) {
        res.status(401).json({message:error})
    }
}
exports.updateById=async(req,res)=>{
    try {
        const updatedPost=await Post.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        await updatedPost.save();
        res.status(200).json({message:"Post updated successfuly",data:updatedPost})
    } catch (error) {
        res.status(401).json({message:error})
    }
}
exports.deleteById=async(req,res)=>{
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Post deleted successfuly"})
    } catch (error) {
        res.status(401).json({message:error})
    }
}
exports.getAll=async(req,res)=>{
    try {
        const post=await Post.find();
        res.status(200).json({message:"Fetched Posts successfully",data:post})
    } catch (error) {
        res.status(401).json({message:error})
    }
}
