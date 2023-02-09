const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posts"
  }
});
const Like = mongoose.model("Like", likeSchema);
module.exports=Like;