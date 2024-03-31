import {Request,Response,NextFunction} from 'express'
import { IDependencies } from '../../application/interfaces/IDependencies'
import { CartEntity } from '../../domain/entity/cartEntity';



export const addToCartController=(dependencies:IDependencies)=>{
    const {useCases:{addToCartUseCase}} = dependencies;
    return async(req:Request,res:Response,next:NextFunction) =>{
        try {
            const data=req.body;
            const cart:CartEntity | null =await addToCartUseCase(dependencies).execute(data)
            res.status(200).json({
                success: true,
                cart: cart,
                message: "item adde to cart!",
                })
        } catch (error:any) {
            next(error)
        }
    }
}