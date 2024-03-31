import { compare } from "bcrypt";
import { AdminEntity } from "../../../domain/entities/AdminEntity";
import { AdminLoginData } from "../../../domain/entities/AdminLoginData";
import { Admin } from "../models/admin";

export const adminLogin=async(data:AdminLoginData):Promise<AdminEntity|null>=>{
    try{
        if (!data.email || !data.password) {
            throw new Error("Email and password are required");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          throw new Error("Invalid email format");
        }
    
        if (data.password.length < 6) {
          throw new Error("Password must be at least 8 characters long");
        }

        const admin:AdminEntity|null= await Admin.findOne({email:data?.email})
        if(admin){
          const isMatch:boolean=await compare(data?.password,admin?.password);
          if(!isMatch){
            throw new Error("Incorrect email or password");
          }else{
            return admin as AdminEntity
          }
        }else{
          throw new Error("No admin found");
        }
    }catch(error:any){
        throw new Error(error?.message)
    }

}