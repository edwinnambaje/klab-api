const mongoose = require("mongoose");

const comment_schema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true
  },
  comment: {
    type: String,
    required: "Content is Required"
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posts"
  }
});
const Comment = mongoose.model("Comment", comment_schema);
module.exports=Comment