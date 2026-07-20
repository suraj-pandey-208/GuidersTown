import mongoose from "mongoose"

const userSchema= new mongoose.Schema({

    name:String,
    email:{
        type:String,
        unique:true,

    },

    password:{
        type:String,
    },
    googleId:String,

    avatar:String,

    provider:{
        type:String,
        enum:["local","google"],
    },

    role:{
        type:String,
        enum:["student","mentor","admin"],
        default:"student",
    },

    

},{timestamps:true})

const User=mongoose.model("User",userSchema)
export default User