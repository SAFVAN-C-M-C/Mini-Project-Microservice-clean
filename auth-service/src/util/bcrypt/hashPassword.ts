import { genSalt, hash } from "bcrypt";

export const hashPassword = async(password:string)=>{
    try {
        const hashedPassword:any=await hash(password,await genSalt(10))
        if(!hashPassword){
            throw new Error("Error while hashing")
        }
        return hashedPassword
    } catch (error:any) {
        console.log(error?.message,"error while hashing"); 
    }
}