import { ProductData } from "../../domain/entity";
import { IDependencies } from "../interfaces/IDependencies";

export const addProductUseCase=(dependencies:IDependencies)=>{
    const {repositories:{addProduct}}=dependencies
    return{
        execute:async(data:ProductData)=>{
            try {
                return await addProduct(data)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}