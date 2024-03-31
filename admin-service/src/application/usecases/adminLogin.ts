import { AdminLoginData } from "../../domain/entities/AdminLoginData";
import { IDependencies } from "../interfaces/IDependencies";

export const adminLoginUseCase=(dependencies:IDependencies)=>{
    const {repositories:{adminLogin}}=dependencies
    return{
        execute:async(loginCredentials:AdminLoginData)=>{
            try {
                return await adminLogin(loginCredentials)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}