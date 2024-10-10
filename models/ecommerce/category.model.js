import mongoose from "mongoose"

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
},{timestamps:true})

export const Category=mongoose.model("Category",categorySchema)
//giving singular model name is a good approach and standard also
//but if we give it a plural name like "categories", mongodb is much intelligent
//that it will detect it is plural and store as it is