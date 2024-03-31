import { IDependencies } from "../../application/interfaces/IDependencies";
import {Request,Response,NextFunction} from 'express'
import { Product } from "../../domain/entity";
export const listProductController=(dependencies:IDependencies)=>{
    const {useCase:{listProductUseCase} }=dependencies
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const token : string | any  = req.cookies.jw_token;
            if(!token){
                throw new Error('Authentication failed due to token undefined')
            }
            const products:Product[] | null = await listProductUseCase(dependencies).execute(token)
            if (!products) {
                throw new Error('No products found');
            }
            res.status(200).json({ success: true, data: products });            
        } catch (error) {
            next(error)
        }
    }
}