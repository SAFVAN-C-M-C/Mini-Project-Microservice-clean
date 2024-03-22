import {userEntity} from '../../domian/Entities'

export const loginUseCase=(dependencies:any)=>{
    const {repositories:{userLoginRepo}}=dependencies
    if(!userLoginRepo){
        throw new Error("Dependecy required for login")
    }
    const execute=async(email:string)=>{
        try {
            return await userLoginRepo(email)
        } catch (error:any) {
            console.log(error?.message);
        }
    }
    return {execute}
}