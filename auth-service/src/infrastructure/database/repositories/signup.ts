import { UserEntity } from "../../../domian/Entities";
import { User } from "../models/user";

export const signUp=async(userCredentials:UserEntity)=>{
    try{  
        const userData = await User.create(userCredentials)
        if(!userData){
            throw new Error("user creation failed")
        }
        return userData as UserEntity
    }catch(err:any){
        console.log(err,"Error occured while signUp");
        throw new Error(err?.message)
    }
}