import { User } from "../DB/Models/user.model.js";
import { verifyToken } from "../Utils/token/verify-token.js";

export const isAuthenticate = async(req,res,next)=>{
    try {
        const{authorization}= req.headers
        if(!authorization)
            return res.status(401).json({
        success:false,
        message:"token is required"
    });
    if(!authorization.startsWith("Bearer "))
        return res.status(404).json({
        success:false,
        message:"invalid bearer key",
        });
    const token = authorization.split(" ")[1];
    //check token
    const result = verifyToken({token});
    if(result.error) return next (result.error);
    const { email, iat} = result;
    const userExist = await User.findOne({email});
    if(!userExist) return next(new Error("invalid email",{cause:404}));

    if(userExist.isDeleted == true)
        return next(new Error("login first", {cause:400}));
    //check if token issued before user deletion
    if(userExist.deletedAt && userExist.deletedAt.getTime() > iat *1000)
        return next(new Error("destroyed token",{cause:400}))
    req.authUser = userExist;
    return next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        });    
    }
};