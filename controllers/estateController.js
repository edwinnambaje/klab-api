const Estate=require('../models/Estate');
const cloudinary=require('../helpers/cloudinary');
const User=require('../models/User');

exports.create=async(req,res)=>{
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
          return res.status(404).send({ error: "User not found" });
        }
        const files=req.files;
        const url=[];
        for(const file of files){
            const result=await cloudinary.uploader.upload(file.path)
            url.push(result.secure_url)
        }
            const estate=new Estate({
                title:req.body.title,
                location:{
                    province:req.body.province,
                    district:req.body.district,
                    street:req.body.street
                },
                image:url,
                price:req.body.price,
                beds:req.body.beds,
                description:req.body.description,
                bath:req.body.bath,
                status:req.body.status,
                LotSize:req.body.lotsize,
                YearBuilt:req.body.year,
                posted_by:user.username,
                userId:user._id
            })
            await estate.save();
            return res.status(200).json(estate)
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
exports.getAll=async(req,res)=>{
    const estate=await Estate.find();
    return res.status(200).json(estate)
}
exports.getSingle=async(req,res)=>{
    const estate=await Estate.findById(req.params.id);
    return res.status(200).json(estate)
}
exports.deleteEstate=async(req,res)=>{
    const estate=await Estate.findByIdAndDelete(req.params.id);
    if(estate.image){
        for(let image in estate.image){
            await cloudinary.uploader.destroy(image);
        }
    }
    return res.status(200).json({message:"Successfully deleted"})
}
exports.updateEstate=async(req,res)=>{
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const estate=await Estate.findById(req.params.id);
    if(!estate) return res.status(400).json({message:"Estate not Found"})
    if(estate.posted_by ===user.username){

    try {
        if(estate.image){
            for(let image in estate.image){
                await cloudinary.uploader.destroy(image);
            }
        }
        const files=req.files;
        const url=[];
        for(const file of files){
            const result=await cloudinary.uploader.upload(file.path)
            url.push(result.secure_url)
        }
        const updatedEstate = await Estate.findByIdAndUpdate(req.params.id,{$set:{
            location:{
                province:req.body.province,
                District:req.body.district,
                street:req.body.street
            },
            image:url,
            price:req.body.price,
            beds:req.body.beds,
            description:req.body.description,
            bath:req.body.bath,
            status:req.body.status,
            LotSize:req.body.lotsize,
            YearBuilt:req.body.year
          }},{new:true});
          res.status(200).json({
            status:"success",
            data:updatedEstate
          });
        } catch (error) {
            res.status(400).json({status:"error", error: error.message });
        }
    }
    else{
        return res.status(400).json({message:"You can not update this estate"})
    }
}