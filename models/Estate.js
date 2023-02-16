const mongoose=require('mongoose');

const EstateSchema=new mongoose.Schema({
    title:{
        type:String
    },
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
        type:Number,
        default:0
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
        type:Number,
        default:0
    },
    description:{
        type:String
    },
    status:{
        type:String
    },
    bath:{
        type:Number,
        default:0
    },
    LotSize:{
        type:String
    },
    like:{
        type:Number,
        default:0
    },
    review:{
        type:Number
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},  {
    timestamps:true
})
const Estate=mongoose.model('estate',EstateSchema);
module.exports=Estate;