const mongoose=require('mongoose');

const EstateSchema=new mongoose.Schema({
    location:{
        province:{
            type:String
        },
        district:{
            type:String
        },
        street:{
            type:String
        }
    },
    price:{
        type:String
    },
    YearBuilt:{
        type:Date,
        default: Date.now
    },
    image:{
        type:Array,
        default:[]
    },
    beds:{
        type:Number
    },
    description:{
        type:String
    },
    status:{
        type:String
    },
    bath:{
        type:Number
    },
    LotSize:{
        type:String
    },
    posted_by: {
        type: String,
        required: true,
        ref: "User",
      },
},  {
    timestamps:true
})
const Estate=mongoose.model('estate',EstateSchema);

module.exports=Estate;