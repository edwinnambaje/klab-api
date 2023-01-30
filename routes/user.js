const router=require('express').Router();
const User=require('../models/User');

router.get('/all',async(req,res)=>{
    try {
        const user=await User.find()
        res.status(200).json({message:"All users",data:user})
    } catch (error) {
        res.status(500).json({message:"Not found"})
    }
})
router.get('/:id',async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        res.status(200).json({message:"User by Id",data:user})
    } catch (error) {
        res.status(500).json({message:"Not found"})
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"User deleted Successfully"})
    } catch (error) {
        res.status(500).json({message:"Not found"})
    }
})
router.put('/:id',async(req,res)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json({message:"User Updated Successfully",data:updatedUser})
    } catch (error) {
        res.status(500).json({message:"Not found"})
    }
})
module.exports=router;