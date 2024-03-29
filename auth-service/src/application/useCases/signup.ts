import { UserEntity } from "../../domian/Entities";
import { IDependencies } from "../interfaces/IDependencies";

export const signUpUseCase=(dependencies:IDependencies)=>{
    const {repositories:{signUp}}=dependencies;

    if(!signUp){
        throw new Error("Dependency required for signUp")
    }

    return {
         execute:async(userCredentials:UserEntity)=>{
            try{
                return await signUp(userCredentials)
            }catch(err:any){
                console.log(err?.message,"error in usecase");
                throw new Error(err?.message)
            }
        },
    }
}