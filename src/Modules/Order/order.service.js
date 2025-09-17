import { Order } from "../../DB/Models/order.model.js";
import { Menu } from "../../DB/Models/menu.model.js";
export const createOrder = async(req, res, next) =>{
  try {
    const existingOrder = await Order.findOne({
      tableNumber:req.body.tableNumber,
      status:{ $in:["pending", "preparing","ready","completed","cancelled"]},
    });
    if(existingOrder){
      return res.status(400).json({ message:"This table is already occupied"});
    }
    const itemsWithPrice =await Promise.all(
      req.body.items.map(async(item) =>{
        const menuItem = await Menu.findById(item.menuItem);
        if(!menuItem) throw new Error("Menu item not found");
        return{
          menuItem: item.menuItem,
          quantity: item.quantity,
          price: menuItem.price, 
        };
      })
    );
    const totalPrice= itemsWithPrice.reduce(
      (sum,item)=>sum + item.price* item.quantity,0
    );
    const order = new Order({
      customer:req.authUser._id,
      items:itemsWithPrice,
      tableNumber:req.body.tableNumber,
      totalPrice,
    });
    await order.save();
    return res.status(201).json({success: true,data:order});
  } catch (error) {
    next(error);
  }
};

export const getOrders =async(req, res, next) =>{
  try {
    const orders = await Order.find()
    .sort({ createdAt: -1 })  
    .populate("customer","name email")
    .populate("items.menuItem","name price");
    return res.status(200).json({success: true,count:orders.length, data:orders});
  } catch (error) {
    next(error);
  }
};

export const getMyOrders = async(req, res, next)=>{
  try {
    const orders = await Order.find({customer: req.authUser._id})
    .sort({createdAt:-1})
    .populate("items.menuItem","name price");
    return res.status(200).json({success:true,count: orders.length,data: orders});
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async(req, res, next)=>{
  try {
    const{orderId}= req.params;
    const{status} =req.body;
    const order = await Order.findById(orderId);
    if (!order){
      return res.status(404).json({message:"order not found"});
    }
    if(order.status === status){
        return res.status(400).json({message:"order already in this status"});
    }
    order.status= status;
    await order.save();

    return res.status(200).json({success: true, message:"order status updated", data:order});
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async(req, res, next)=>{
  try {
    const{orderId}= req.params;
    const order = await Order.findByIdAndDelete(orderId);
    if(!order){
      return res.status(404).json({message:"order not found"});
    }
    return res.status(200).json({success:true,message:"order deleted successfully"});
  } catch (error) {
    next(error);
  }
};
