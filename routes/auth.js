const router=require('express').Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');

router.post('/register',async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        const user=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })
        await user.save();
        res.status(200).json({message:"User created successfully", data:user})
    } catch (error) {
        res.status(500).json({message:"Internal Server error", data:error})
    }
})
router.post('/login',async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        !user&&res.status(400).json({message:"Invalid User"})
        const validated=await bcrypt.compare(req.body.password,user.password);
        !validated&&res.status(400).json({message:"Invalid Password"})
        res.status(200).json({message:"Successfully Logged In", data:user})
    } catch (error) {
        res.status(500).json({message:"Internal Server error", data:error})
    }
})
module.exports=router;