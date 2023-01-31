const verify =require('../helpers/jwt');

const verifyToken=async(req,res,next)=>{
    try {
        const authHeader = req.headers.token;
        if(!authHeader){
            res.status(401).json({message:"You are not authenticated 1"});
        }
        const token=authHeader.split(' ')[1];
        if(!token){
            res.status(401).json({message:"You are not authenticated 2"});
        }
        const verified=verify.verify(token);
        req.user=verified;
        next();
    } catch (error) {
        res.status(400).json({message:error})
    }
}
const verifyTokenAndRole = (req,res,next) =>{
    verifyToken(req,res,() =>{
        if(req.user.role === 'admin'){
            next();
        }
        else{
            return res.status(401).json({status:"error",error:"You are not authenticated"});
        }
    })
}
module.exports={verifyToken,verifyTokenAndRole}