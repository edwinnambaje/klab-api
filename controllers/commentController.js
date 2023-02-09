
const Post=require('../models/Post');
const Comment=require('../models/Comment')
const User=require('../models/User')
exports.createComment=async (req, res) => {
    //Find a POst
    const post = await Post.findById(req.params.id);
    if(!post)return res.status(400).json({message:"Post not Found"})
  //Create a Comment
  const comment = new Comment({
    // username:user.username,
    comment:req.body.comment,
    post:req.params.id,
    username:req.user._id
  });
  console.log(req.user._id);
  await comment.save();
  //Associate Post with comment
  post.comments.push(comment);
  await post.save();
  return res.send(comment);
};
exports.gettComment=async (req,res)=>{
  const comment=await Comment.find();
  res.send(comment)
}
exports.deleteComment= async (req,res)=>{
  await Comment.findByIdAndDelete(req.params.commentId);
  res.status(200).json({message:'Deleted successfully'})
}