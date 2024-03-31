import { UserData } from "../../domain/entities/UserData";
import { IDependencies } from "../interfaces/IDependencies";

export const addUserUseCase=(dependencies:IDependencies)=>{
    const {repositories:{addUser}}=dependencies
    return {
        execute:async(data:UserData)=>{
            try {
                return await addUser(data)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}