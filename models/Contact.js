const mongoose=require('mongoose');

const ContactSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
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