import { Request,Response,NextFunction } from 'express'
import { IDependencies } from '../../application/interfaces/IDependencies'
import { CartEntity } from '../../domain/entity/cartEntity';




export const getCart=(dependencies:IDependencies)=>{
    const {useCases:{getCartUseCase}} = dependencies;
    return async(req:Request,res:Response,next:NextFunction):Promise <void> =>{
        try {
            const userId = req.params.id;
            console.log("🚀 ~ file: getCart.ts:11 ~ returnasync ~ userId:", userId)
            const cart:CartEntity | null = await getCartUseCase(dependencies).execute(userId);
            res.status(200).json({success:true,cart});
        } catch (error:any) {
            next(error)
        }
    }
}