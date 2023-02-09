const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user: {
    type:String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likecount:{
    type:Number,
    default:0
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posts"
  }
});
const Like = mongoose.model("Like", likeSchema);
module.exports=Like;