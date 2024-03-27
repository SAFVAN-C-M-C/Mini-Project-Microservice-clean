import { userEntity } from "../../../domian/Entities";
import { User } from "../models/user";

export const userSignUpRepo=async(userCredentials:userEntity)=>{
    try{  
        const userData = await User.create(userCredentials)
        return userData as userEntity
    }catch(err:any){
        console.log(err,"Error occured while signUp");
    }
}