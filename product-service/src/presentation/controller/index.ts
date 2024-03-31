import { IDependencies } from "../../application/interfaces/IDependencies";

import { addProductController } from "./addProduct";
import { listProductController } from "./listProduct";

export const controller=(dependencies:IDependencies)=>{
    return{
        addProduct:addProductController(dependencies),
        listProduct:listProductController(dependencies)
    }
}