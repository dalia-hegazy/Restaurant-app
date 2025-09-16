import { model, Schema } from "mongoose";

export const categories ={
  MAIN:"main",
  APPETIZER:"appetizer",
  DESSERT:"dessert",
  DRINK:"drink",
};
const menuSchema = new Schema({
    name:{
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        minLength:5,
        maxLength:100,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
    category:{
        type: String,
        enum: Object.values(categories),
        required: true
    },
    image:{
        secure_url:{ type: String},
        public_id:{ type: String}
    },
    available:{type: Boolean,default:true},
    createdBy:{
  type: Schema.Types.ObjectId,
  ref: "User",
  required: true,
}
},{timestamps: true}
);

export const Menu = model("Menu",menuSchema);