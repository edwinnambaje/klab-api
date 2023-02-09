const User=require('../models/User');
const Post=require('../models/Post');
const cloudinary=require('../helpers/cloudinary');

exports.create=async(req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const post = new Post({
            title:req.body.title,
            desc:req.body.desc,
            image:result.secure_url,
            postedBy:req.user
        });
        console.log(post)
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(401).json({message:"error"});
    }
}
exports.getById=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id).populate({
            path: "comments",
            populate: {
              path: "createdBy",
            },
          });
          let res;
          if (post) {
            //get the name of the creator
            const user = await User.findById(post.createdBy);
            res = {
              ...post.toObject(),
              createdByName: user.username,
              userImageUrl: user.imagePath,
            };
          }
          return res;
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
exports.updatePost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        await cloudinary.uploader.destroy(post.image);
        const result = await cloudinary.uploader.upload(req.file.path);
        const updatedBlog = await Post.findByIdAndUpdate(req.params.id,{$set:{
            title:req.body.title,
            desc:req.body.desc,
            image:result.secure_url,
          }},{new:true});
          res.status(200).json({
            status:"success",
            data:updatedBlog
          });
        } catch (error) {
            res.status(500).json({status:"error", error: error.message });
          }
}
exports.getAll=async(req,res)=>{
    try {
        const post=await Post.find().populate("comments")
        res.status(200).json({message:"Fetched Posts successfully",data:post})
    } catch (error) {
        res.status(401).json({message:error})
    }
}