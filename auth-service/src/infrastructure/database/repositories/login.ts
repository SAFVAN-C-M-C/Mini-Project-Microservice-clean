import { userEntity } from "../../../domian/Entities";
import { User } from "../models/user";

export const userLoginRepo=async(email:string)=>{
    try{
        const existingUser=await User.findOne({email:email});
        if(!existingUser){
            throw new Error("User not found")
        }
        return existingUser as userEntity
    }catch(err:any){
        console.log(err,"Error occured while login");
        
    }
}