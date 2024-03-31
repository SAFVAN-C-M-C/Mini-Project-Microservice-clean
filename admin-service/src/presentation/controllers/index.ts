import { IDependencies } from "../../application/interfaces/IDependencies";
import { addAdminController } from "./addAdminController";
import { addUserController } from "./addUserController";
import { adminLoginController } from "./adminLoginController";


export const controller=(dependencies:IDependencies)=>{
    return{
        adminLogin:adminLoginController(dependencies),
        addUser:addUserController(dependencies),
        addAdmin:addAdminController(dependencies)
    }
}