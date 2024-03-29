import { ObjectId } from "mongoose";

export interface LoginUser{
    _id?:ObjectId;
    email:string;
    password:string;
}