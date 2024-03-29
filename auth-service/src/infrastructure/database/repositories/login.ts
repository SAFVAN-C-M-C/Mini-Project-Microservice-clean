import { LoginUser } from "../../../application/interfaces/ILoginUser";
import { UserEntity } from "../../../domian/Entities";
import { User } from "../models/user";
import { compare } from "bcrypt";
export const login=async(loginCredentials:LoginUser)=>{
    try{
        const userDetails:UserEntity | null=await User.findOne({email:loginCredentials.email});

        if(userDetails){
            const isMatch:boolean=await compare(loginCredentials?.password,userDetails?.password)
            
            if(!isMatch){
                throw new Error("invalid credentials")
            }else{
                return userDetails as UserEntity
            }
        }else{
            throw new Error("User not found!")
        }
    }catch(err:any){
        console.log(err,"Error occured while login");
        throw new Error(err?.message)
    }
}