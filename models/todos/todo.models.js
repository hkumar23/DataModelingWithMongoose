import mongoose from "mongoose"

const todoSchema=new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        complete:{
            type:Boolean,
            default: false,
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId, // here we are making a relation b/w todo and user model
            ref: "User" // name of model, that we are referencing
        },
        subTodos:[ //Array of Objects
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"SubTodo"
            },
        ]
    },{timestamps:true}
)

export const Todo = mongoose.model("Todo",todoSchema)