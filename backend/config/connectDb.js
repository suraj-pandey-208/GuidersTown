import mongoose from "mongoose"
import dotenv from "dotenv"

const connectDb= ()=>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("database connected successfuly")
    }  catch(error){
        console.log(error)
    }
}
export default connectDb