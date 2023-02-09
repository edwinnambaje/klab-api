const User=require('../models/User');

exports.getAll=async(req,res)=>{
    try {
        const user=await User.find()
        res.status(200).json({message:"All users",data:user})
    } catch (error) {
        res.status(500).json({message:"Not found"})
    }
}
exports.getById=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id).populate('blogs');
        res.status(200).json({message:"User by Id",data:user})
    } catch (error) {
        res.status(500).json({message:"Not found"})
    }
}
exports.deleteById=async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"User deleted Successfully"})
    } catch (error) {
        res.status(500).json({message:"Not found"})
    }
}
exports.updateById=async(req,res)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json({message:"User Updated Successfully",data:updatedUser})
    } catch (error) {
        res.status(500).json({message:"Not found"})
    }
}