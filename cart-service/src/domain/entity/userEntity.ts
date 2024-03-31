import {ObjectId} from "mongoose"

enum Role{
    user = 'user',
    admin = 'admin'
}

export interface IUserEntity{
    _id?:ObjectId ;
    username:string;
    email:string;
    password:string;
    role:Role;
    isAdmin:boolean,
    isBlocked:boolean;
}

export interface IUserRequestEntity{
    _id?: ObjectId;
    username:string;
    email:string;
    password:string;
}