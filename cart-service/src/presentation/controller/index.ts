import { IDependencies } from "../../application/interfaces/IDependencies";
import {addToCartController} from './addToCartContoller'
import {getCart} from './getCartController'

export const controllers=(dependencies:IDependencies)=>{
    return{
        users:addToCartController(dependencies),
        getCart:getCart(dependencies)
    }
};
