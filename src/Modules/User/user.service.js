import { User } from "../../DB/Models/user.model.js";

export const getUser = async(req, res, next)=>{
    try {
      const {password, ...safeUser} = req.authUser.toObject();
      return res.status(200).json({
        success: true,
        data:safeUser,
      }); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "server error",
        });
    }
};

export const updateUser = async(req, res, next) =>{

    const{ userName, email} = req.body;
    // find user
    const user = await User.findById(req.authUser._id);
    if(!user)return next(new Error("user not found",{cause:404}));
    if(email && email !== user.email){
      const existingEmail = await User.findOne({email});
      if(existingEmail){
        return res.status(409).json({success: false,message:"email already in use"});
      }
      user.email = email;
    }
    if(userName && userName !== user.userName){
      const existingUserName= await User.findOne({userName});
      if(existingUserName){
        return res.status(409).json({success: false, message:"username already in use"});
      }
      user.userName = userName;
    }
    await user.save();
    return res.status(200).json({
        success: true,
        message:"user updated successfully",
         data:{
        userName:user.userName,
        email:user.email,
        role:user.role,
        gender:user.gender,
      },
    });
};

export const deleteUser = async(req, res, next)=>{
  try {
    const {userId}= req.params;
    const user = await User.findById(userId);
    if (!user) return next(new Error("user not found",{cause: 404}));
    if (user.isDeleted){
      return res.status(400).json({success: false, message:"user already deleted"});
    }
    user.isDeleted = true;
    user.deletedAt = new Date();
    await user.save();

    return res.status(200).json({
      success: true,
      message:"user deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
};

// if admin want to show users
export const listUsers = async(req, res, next) =>{
  try {
    const users = await User.find({},"-password");
    return res.status(200).json({
      success: true,
      count:users.length,
      data: users,
    });
  } catch (error) {
    return next(error);
  }
};
