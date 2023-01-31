const verify =require('../helpers/jwt');

exports.verifyToken=async(req,res,next)=>{
    try {
        const authHeader = req.headers["authorization"];
        if(!authHeader){
            res.status(401).json({message:"You are not authenticated"});
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
