import { AdminData } from "../../domain/entities/AdminData";
import { IDependencies } from "../interfaces/IDependencies";

export const addAdminUseCase=(dependencies:IDependencies)=>{
    const {repositories:{addAdmin}}=dependencies
    return{
        execute:async(data:AdminData)=>{
            try {
                return await addAdmin(data)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}