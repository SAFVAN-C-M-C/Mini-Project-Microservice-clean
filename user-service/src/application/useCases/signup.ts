import { userEntity } from "../../domian/Entities";

export const signupUsecase=(dependencies:any)=>{
    const {repositories:{userSignUpRepo}}=dependencies;
    
    if(!userSignUpRepo){
        throw new Error("Dependency required for signUp")
    }
    const execute=async(userCredentials:userEntity)=>{
        try{
            return await userSignUpRepo(userCredentials)
        }catch(err:any){
            console.log(err?.message,"error in usecase");
        }
    }
    return {execute}
}