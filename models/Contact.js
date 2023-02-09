const mongoose=require('mongoose');

const ContactSchema=new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    },
    Names:{
        type:String,
        required:false
    },
    Phone:{
        type:Number,
        required:false
    },

},  {
    timestamps:true
})
const Contact=mongoose.model('contact',ContactSchema);

module.exports=Contact;