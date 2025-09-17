import { Menu } from "../../DB/Models/menu.model.js";
import cloudinary from "../../Utils/file uploads/cloud-config.js";

export const createMenu= async(req, res, next) =>{
  try {
    if(!req.file){
      return res.status(400).json({success: false, message:"image is required"});
    }
    const{ secure_url,public_id} = await cloudinary.uploader.upload(
      req.file.path,
      {folder:`restaurant/menu/${req.authUser._id}`}
    );
    const menu = await Menu.create({
      name:req.body.name,
      description: req.body.description,
      price:req.body.price,
      category:req.body.category,
      available: req.body.available,
      createdBy:req.authUser._id,
      image:{secure_url, public_id},
    });
    return res.status(201).json({success: true,data:menu});
  } catch (error) {
    return next(error);
  }
};

export const getAllMenus = async(req, res, next)=>{
  try {
    const{ category,q,available}= req.query;
    const filter ={};
    if(category)filter.category =category;
    if(typeof available !=="undefined") filter.available = available==="true";
    if(q)filter.name ={$regex:q, $options:"i"};

    const menus = await Menu.find(filter).populate({path:"createdBy",select:"userName"});
    return res.status(200).json({success:true,count: menus.length,data:menus});
  } catch (error) {
    return next(error);
  }
};

export const getSingleItem = async(req, res, next)=>{
  try {
    const{itemId} = req.params;
    const menu = await Menu.findById(itemId).populate({
      path:"createdBy",
      select:"userName profilePic.secure_url",
    });
    if(!menu){
      return res.status(404).json({message:"menu item not found"});
    }
    return res.status(200).json({success:true, data:menu});
  } catch (error) {
    return next(error);
  }
};

export const updateItemofMenu =async(req, res, next) =>{
  try {
    const{itemId} =req.params;
    const{name,description, price,category, available}= req.body;
    const menu = await Menu.findById(itemId);
    if (!menu){
      return res.status(404).json({message:"item not found"});
    }
    if (req.file){
      if (menu.image?.public_id){
        await cloudinary.uploader.destroy(menu.image.public_id);
      }
      const result = await cloudinary.uploader.upload(req.file.path,{
        folder:`restaurant/menu/${req.authUser._id}`,
      });
      menu.image ={
        secure_url: result.secure_url,
        public_id:result.public_id,
      };
    }
    if(name)menu.name = name;
    if(description)menu.description = description;
    if(price)menu.price =price;
    if(category)menu.category = category;
    if(available !== undefined)menu.available = available;
    await menu.save();

    return res.status(200).json({
      success:true,
      message:"menu updated successfully",
      data: menu,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMenu =async(req, res, next) =>{
  try {
    const{itemId} = req.params;
    const menu = await Menu.findById(itemId);
    if(!menu){
      return res.status(404).json({message:"menu item not found"});
    }
    if(menu.image?.public_id){
      await cloudinary.uploader.destroy(menu.image.public_id);
    }
    await Menu.findByIdAndDelete(itemId);
    return res.status(200).json({success: true,message:"menu item deleted successfully"});
  } catch (error) {
    next(error);
  }
};