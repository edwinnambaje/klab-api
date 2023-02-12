// const express = require("express");
// const Post = require("../models/Post");
// const User=require('../models/User');
// exports.like = async (req, res) => {
//     const { id } = req.params;
//     const blog = await Post.findById(id);
//     const user = await User.findById(req.user._id);
//     if (!user) {
//       return res.status(404).send({ error: "User not found" });
//     }
//     if (!blog) {
//       return res.status(404).send({ error: "Blog not found" });
//     }
//     //blog.likes.push(req.user._id);
//     blog.likedBy.push(user.username);

//     await blog.save();
//     return res.status(200).send({ message:"liked",blog: blog });
// };
  
// exports.unlike= async (req, res) => {
//     const { id } = req.params;
//     const blog = await Post.findById(id);
//     if (!blog) {
//       return res.status(404).send({ error: "Blog not found" });
//     }
//     const index = blog.likes.indexOf(req.user._id);
//     blog.likes.splice(index, 1);
//     await blog.save();
//     return res.status(200).send({ message:"unliked",blog: blog });
// };