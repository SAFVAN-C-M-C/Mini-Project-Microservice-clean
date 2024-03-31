import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { AdminData } from "../../domain/entities/AdminData";
import { AdminEntity } from "../../domain/entities/AdminEntity";

export const addAdminController=(dependencies:IDependencies)=>{
    const {useCases:{addAdminUseCase}}=dependencies
    if (!addAdminUseCase) {
        throw new Error("addAdminUseCase is not defined in dependencies");
    }
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const adminCredential:AdminData=req.body
            const admin:AdminEntity|null=await addAdminUseCase(dependencies).execute(adminCredential);
            if(!admin){
                res.status(401).json({message:"Admin added failed",success:false})
            }else{
                res.status(201).json({message:"Admin added succefuly",success:true,user:admin})
            }
        } catch (error) {
            next(error)
        }
    }
}