import mongoose from "mongoose";
// we have created the schema of orderItem in this file only
// because we are not going to use it in another file, that's why export not required
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type: Number,
        required: true,
    }
})

const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema], //Array of schema
    },                          //we can also do it like we have done in todos
    address:{
        type: String,
        required: true
    },
    states:{ //This is a restrictive feild, we can choose only from given enums
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
    }
},{timestamps:true})

export const Order=mongoose.model("Order",orderSchema)