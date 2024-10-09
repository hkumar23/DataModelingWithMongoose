import mongoose from "mongoose";
//Mongoose helps us to define schema 
const userSchema=new mongoose.Schema(
    {
    // we can do like this also username:String
    // but to give more detail we also do like below
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true,"password is required"], // we can pass custom messages also to validate        
        },
    },
    // secondary object is passed to store timestamps
    {timestamps:true}
)

//We Generally use these schemas in different files rather than getting it from database
//when these files are connected to DB, then they automatically run, and a structure(schema) in db is made, then data will come in it
export const User = mongoose.model("User",userSchema)
// "User"= name of model in db
// userSchema= on its basis schema/structure is created in db
// Here model is "User", but when it goes into DB it becomes plural always,
// like "User" will be "users"