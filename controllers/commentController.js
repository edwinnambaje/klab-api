const Post = require('../models/Post')
const Comment = require('../models/Comment')
const User = require('../models/User')
exports.createComment = async (req, res) => {
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(404).send({ error: 'User not found' })
  }
  const post = await Post.findById(req.params.id)
  if (!post) return res.status(400).json({ message: 'Post not Found' })
  const comment = new Comment({
    comment: req.body.comment,
    post: req.params.id,
    user: user.username,
    userId: user._id
  })
  await comment.save()
  post.comments.push(comment)
  await post.save()
  return res.send(comment)
}
exports.gettComment = async (req, res) => {
  const comment = await Comment.find()
  res.send(comment)
}
exports.deleteComment = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.commentId)
  res.status(200).json({ message: 'Deleted successfully' })
}
