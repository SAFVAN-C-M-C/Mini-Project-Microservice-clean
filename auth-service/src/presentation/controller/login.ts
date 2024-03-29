import e, { NextFunction, Request, Response } from "express"
import { UserEntity } from "../../domian/Entities";
import { compare } from "bcrypt";
import  jwt  from "jsonwebtoken";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const  userLogin=(dependencies:IDependencies)=>{
    const {useCase:{loginUseCase}}=dependencies;
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const userCredential=req.body;
            const {email,password}=req.body;
            
            if(!email || !password){
                res.status(400).json({ success: false, message: "Email and password are required" });
                return;
            }
            
            const user:UserEntity|null=await loginUseCase(dependencies).execute(userCredential)
            
            
            if(user){
                const userId:string=user?._id?String(user?._id):""

                let payload={
                    _id:userId,
                    email:user?.email,
                    name:user?.username,
                    isAdmin: user?.isAdmin,
                    isBlocked: user?.isBlocked
                }
                const accessToken=jwt.sign(payload,String(process.env.ACCESS_TOKEN_SECRET),{expiresIn:"1h"})
                res.cookie("jw_token",accessToken,{maxAge: 1000 * 60 * 60 * 24,httpOnly:true})
                res.status(201).json({message:"Login Successful",success:true,data:user})
            }else{
                res.status(401).json({ success: false, message: "Invalid email or password" });
            }
        } catch (error:any) {
            next(error)
        }
    }
}