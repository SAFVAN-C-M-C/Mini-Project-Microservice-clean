import { userLogin } from "./login"
import { userSignUp } from "./signup"

export const controllers = (dependencies:any)=>{
    return{
        signup:userSignUp(dependencies),
        login:userLogin(dependencies)
    }
}