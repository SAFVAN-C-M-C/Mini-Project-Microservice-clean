import { IDependencies } from "../../application/interfaces/IDependencies";
import {Request,Response,NextFunction} from 'express'
import { verifyToken } from "../../util/verifyToken";
import { validateProductRequest } from "../../util/productValidation";
import { Product } from "../../domain/entity";
export const addProductController=(dependencies:IDependencies)=>{
    const {useCase:{addProductUseCase}}=dependencies
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const token : string | any  = req.cookies.jw_token;
            const decodedToken:any=verifyToken(token);
            const role:string=decodedToken?.role;
            if(!role){
                throw new Error("Role not found in token payload");
            }
            if (role === "user") {
                res.status(401).json({error:"Unauthorized access: User role does not have permission to add products",success:false})
            }
            const data = req.body;
            const verifiedProdut=validateProductRequest(data);
            if(!verifiedProdut.isValid){
                return res.status(400).json({ success: false, errors: verifiedProdut?.errors });
            }
            const product:Product | null = await addProductUseCase(dependencies).execute(data)
            res.status(201).json({ success: true, data: product });
        } catch (error) {
            next(error)
        }
    }
}