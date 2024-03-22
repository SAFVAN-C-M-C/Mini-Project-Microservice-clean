import mongoose,{connect} from "mongoose";
import { config } from "dotenv";
export default async ()=>{
    config()
    try {
        console.log("hello");
        connect(String(process.env.MONGO_URI).trim())
        .then(()=>console.log("connected"))
        .catch((err)=>{
            console.log(err.message);
        })
    } catch (error) {
            throw new Error("Error in connecting user-database");
    }
}