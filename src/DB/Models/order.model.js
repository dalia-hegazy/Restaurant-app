import { model, Schema, Types,mongoose } from "mongoose";
export const orderStatus ={
  PENDING: "pending",      
  PREPARING: "preparing",   
  READY: "ready",                 
  COMPLETED: "completed",
  CANCELLED: "cancelled"
};
const orderSchema = new Schema({
  customer:{type:Types.ObjectId,ref:"User", required:true},
  items:[
    {
      menuItem: {type: Types.ObjectId,ref: "Menu",required:true},
      quantity: {type: Number,default: 1, min: 1}
    }
  ],
  totalPrice:{type: Number,required:true},
  status:{
    type: String,
    enum: Object.values(orderStatus),
    default: orderStatus.PENDING
  },
  tableNumber:{
    type: Number,   
    required: false
  }
},{
  timestamps:true
});

orderSchema.pre("save", async function(next){
  let total =0;
  for (const item of this.items){
    const menuItem = await mongoose.model("Menu").findById(item.menuItem);
    if(menuItem){
      total+= menuItem.price * item.quantity;
    }
    if(!menuItem){
      return next(new Error(`Menu item not found: ${item.menuItem}`));
    }
  }
  this.totalPrice = total;
  next();
});

export const Order = model("Order", orderSchema);