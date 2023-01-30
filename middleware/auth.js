const verify =require('../helpers/jwt');

export const verifyToken=async(req,res,next)=>{
    try {
        const authHeader=req.body.token;
        if(!authHeader){
            return res.status(401).json({message:"You are not authenticated"});
        }
        const token=authHeader.split('')[1];
        if(!token){
            res.status(401).json({message:"You are not authenticated"});
        }
        const verified=verify.verify(token);
        req.user=verified;
        next();
    } catch (error) {
        res.status(400).json({message:error})
    }
}
module.exports=verifyToken;