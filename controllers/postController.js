const User=require('../models/User');
const Post=require('../models/Post');
const cloudinary=require('../helpers/cloudinary');

exports.create=async(req,res)=>{
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
          return res.status(404).send({ error: "User not found" });
        }
        //console.log(user)
        const result = await cloudinary.uploader.upload(req.file.path);
        const post = new Post({
            title:req.body.title,
            desc:req.body.desc,
            image:result.secure_url,
            author: user.username,
            author_id: user._id,
        });
        console.log(user.username)
        await post.save();
        user.blogs.push(post._id);
        await user.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(401).json({message:"error"});
    }
}
exports.getById=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id).populate("comments","user comment -_id");
        res.status(200).json({data:post})
    } catch (error) {   
        res.status(401).json({message:error})
    }
}
exports.deleteById=async(req,res)=>{
    try {
        const post=await Post.findByIdAndDelete(req.params.id);
        if(post.image){
            for(let image in post.image){
                await cloudinary.uploader.destroy(image);
            }
        }
        res.status(200).json({message:"Post deleted successfuly"})
    } catch (error) {
        res.status(401).json({message:"error"})
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
        const post=await Post.find().populate("comments","comment username")
        res.status(200).json({message:"Fetched Posts successfully",data:post})
    } catch (error) {
        res.status(401).json({message:error})
    }
}
exports.like=async(req,res)=>{
    try {
      const {likes} = await Post.findByIdAndUpdate(req.params.id,{$inc: {likes:1}},{new:true});
      return res.status(200).json({status:"success",likes})
    } catch (error) {
      return res.status(400).json({ status: "error", error: error.message });
    }
}