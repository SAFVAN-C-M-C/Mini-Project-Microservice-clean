import { IDependencies } from "../../application/interfaces/IDependencies"
import { userLogin } from "./login"
import { userSignUp } from "./signup"

export const controllers = (dependencies:IDependencies)=>{
    return{
        signup:userSignUp(dependencies),
        login:userLogin(dependencies)
    }
}