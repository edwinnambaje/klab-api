const mongoose = require("mongoose");

const comment_schema = new mongoose.Schema({
  user: {
    type:String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comment: {
    type: String,
    required: "Comment is required"
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posts"
  }
});
const Comment = mongoose.model("Comment", comment_schema);
module.exports=Comment