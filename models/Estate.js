const mongoose=require('mongoose');

const EstateSchema=new mongoose.Schema({
    location:{
        type:String
    },
    price:{
        type:String
    },
    YearBuilt:{
        type:Date
    },
    Images:{
        type:Array,
        default:[]
    },
    Beds:{
        type:Number
    },
    Description:{
        type:String
    },
    Bath:{
        type:Number
    },
    LotSize:{
        type:String
    }
},  {
    timestamps:true
})
const Estate=mongoose.model('estate',EstateSchema);

module.exports=Estate;