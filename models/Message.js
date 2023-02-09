const mongoose=require('mongoose');

const MessageSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    names:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:false
    },

},  {
    timestamps:true
})
const Message=mongoose.model('Message',MessageSchema);

module.exports=Message;