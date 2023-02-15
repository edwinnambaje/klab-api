const router=require('express').Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const sign=require('../helpers/jwt')
const {validate}=require('../middleware/validate');
const {loginSchema,registerSchema}=require('../validations/userSchema')

router.post('/register',validate(registerSchema),async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        const user=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
            role:req.body.role
        })
        //const accessToken=sign.sign({_id:user.id,role:user.role})
        await user.save();
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:"Internal Server error", data:error})
    }
})
router.post('/login',validate(loginSchema),async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        if(!user) return res.status(400).json({message:"Invalid User"})
        const validated=await bcrypt.compare(req.body.password,user.password);
        if(!validated)  return res.status(400).json({message:"Invalid Password"})
        const accessToken=sign.sign({_id:user.id,role:user.role})
        return res.status(200).json({message:"Successfully Logged In", data:user,token:accessToken})
    } catch (error) {
       return res.status(500).json({message:"Internal Server error", data:error})
    }
})
module.exports=router;