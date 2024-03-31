import { IDependencies } from "../interfaces/IDependencies";

export const getCartUseCase=(dependencies:IDependencies)=>{
    const {repositories:{getCart}}=dependencies
    return{
        execute:async(userId:string)=>{
            try {
                return await getCart(userId)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}