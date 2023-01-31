
const Post=require('../models/Post');
const cloudinary=require('../helpers/cloudinary');

exports.create=async(req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const post = new Post({
            title:req.body.title,
            desc:req.body.desc,
            image:result.secure_url,
        });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
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
        const post=await Post.findById(req.params.id);
        if(!post) return res.status(404).json({status:"fail",error:"The blog is not found"})
        await cloudinary.uploader.destroy(blog.image);
        const result = await cloudinary.uploader.upload(req.file.path);
        const updatedBlog = await Post.findByIdAndUpdate(req.params.id,{$set:{
            title:req.body.title ? req.body.title : post.title,
            desc:req.body.desc ? req.body.desc : post.desc,
            image:result.secure_url
          }},{new:true});
          res.status(200).json({
            status:"successfully",
            data:updatedBlog
          });
        } catch (error) {
          res.status(500).json({status:"error", error: error.message });
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
