import mongoose, { Document, Schema } from "mongoose";

export interface IuserSchema extends Document{
    name:string;
    email:string;
    password:string;
    isAdmin:boolean;
    isBlocked:boolean;
}

const userSchema:Schema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,lowercase:true},
    password:{type:String,required:true},
    isAdmin:{type:String,required:true},
    isBlocked:{type:String,required:true},
})

export const User = mongoose.model<IuserSchema>("user",userSchema)