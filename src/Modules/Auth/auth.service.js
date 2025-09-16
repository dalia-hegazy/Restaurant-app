import { User } from "../../DB/Models/user.model.js";
import { asyncHandler } from "../../Utils/error/async-handler.js";
import { generateToken } from "../../Utils/token/generate-token.js";
import { compare } from "../../Utils/hash/compare.js";
import { encrypt } from "../../Utils/crypto/encrypt.js";

export const register = async(req, res , next)=>{
    const {userName, email, password, phone} = req.body;
    const createUser = await User.create({
        userName,
        email,
        password,
        phone:encrypt({plaintext:phone})
    });
    return res.status(201).json({
        success: true,
        message:"user created successfully",
        data: createUser,
    });
};
export const login = asyncHandler(async(req, res ,next)=>{
    const{email, password}= req.body;
    const userExist = await User.findOne({email});
    if(!userExist){
        return next(new Error("email not found",{cause:401}));
    }
    if(userExist.isDeleted==true){
        await User.updateOne({_id:userExist._id},{isDeleted:false});
    }
    const match =compare({password,hashedPassword:userExist.password});
    if (!match){
        return next(new Error("invalid password",{cause:401}));
    };
    const accessToken = generateToken({
        payload:{email, id:userExist._id},
        options:{expiresIn:"2h"}
    });
    return res.status(200).json({
        success:true,
        message:"login successfully",
        access_token:accessToken,
    });
});