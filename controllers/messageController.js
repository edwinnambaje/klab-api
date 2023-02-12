
const Message=require('../models/Message');
const mailer=require('../helpers/email')
exports.create=async(req,res)=>{
    const message= new Message({
        email:req.body.email,
        message:req.body.message,
        names:req.body.names,
        phone:req.body.phone
    })
    await message.save();
    await mailer.mailer(req.body.email,req.body.message);
    return res.status(200).json({message:"Message sent successfully",data:message})
}
exports.getMessages=async(req,res)=>{
    const message=await Message.find()
    return res.status(200).json({message:"Messages fetched successfully",data:message})
}
exports.getSingle=async(req,res)=>{
    const message=await Message.findById(req.params.id)
    return res.status(200).json({message:"Message fetched successfully",data:message})
}
exports.delete=async(req,res)=>{
    await Message.findByIdAndDelete(req.params.id)
    return res.status(200).json({message:"Message deleted successfully"})
}
exports.update=async(req,res)=>{
    const message=await Message.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    return res.status(200).json({message:"Message updated successfully",data:message})
}
