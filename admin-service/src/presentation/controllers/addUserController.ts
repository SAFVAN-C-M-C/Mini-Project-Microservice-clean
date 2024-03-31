import { IDependencies } from "../../application/interfaces/IDependencies";
import {Request,Response,NextFunction}  from 'express'
import { UserData } from "../../domain/entities/UserData";
import { UserEntity } from "../../domain/entities/UserEntity";
export const addUserController=(dependencies:IDependencies)=>{
    const {useCases:{addUserUseCase}}=dependencies
    if (!addUserUseCase) {
        throw new Error("addUserUseCase is not defined in dependencies");
    }
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const userCredential:UserData=req.body
            const addedUser:UserEntity|null=await addUserUseCase(dependencies).execute(userCredential);
            if(!addedUser){
                res.status(401).json({message:"User added failed",success:false})
            }else{
                res.status(201).json({message:"User added succefuly",success:true,user:addedUser})
            }
        } catch (error) {
            next(error)
        }
    }
}