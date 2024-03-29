import { ObjectId } from "mongoose";


export interface UserEntity{
    _id?: ObjectId | string;
    username:string;
    email:string;
    password:string;
    role:Role;
    isAdmin:boolean,
    isBlocked:boolean;
}
enum Role{
    user = 'user',
    admin = 'admin'
}

