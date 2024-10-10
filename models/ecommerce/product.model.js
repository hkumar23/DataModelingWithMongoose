import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    productImage:{
        type: String, // we can use cloud services where we can store our buffer docs like images,videos etc
    },                // they will give us a url to our document/image which can be stored in db
    price:{
        type: Number,
        default:0,
    },
    stock:{
        type:Number,
        default:0,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

},{timestamps:true})

export const Product=mongoose.model("Product",productSchema)