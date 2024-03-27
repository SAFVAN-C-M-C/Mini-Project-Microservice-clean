import { NextFunction, Request, Response } from "express"
import { userEntity } from "../../domian/Entities";
import { compare } from "bcrypt";
import  jwt  from "jsonwebtoken";

export const  userLogin=(dependencies:any)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {useCase:{loginUseCase}}=dependencies;
        try {
            const userCredential=req.body;
            console.log(userCredential);
            
            const user:userEntity|null=await loginUseCase(dependencies).execute(userCredential.email)
            
            if(!user){
                throw new Error("User doesn't exist");
            }
            const validatePassword= await compare(userCredential.password,user.password)
            
            if(!validatePassword){
                throw new Error("Incorect Password")
            }
            if(user){
                let payload={
                    _id:user?._id,
                    email:user?.email,
                    name:user?.name,
                    role:user?.isAdmin?"admin":"user"
                }
                const accessToken=jwt.sign(payload,String(process.env.ACCESS_TOKEN_SECRET),{expiresIn:"1h"})
                res.cookie("jw_token",accessToken,{httpOnly:true})
                res.status(201).json({message:"Login Successful",success:true,data:user})
            }
        } catch (error:any) {
            console.log(error,"Error while login");
            res.json({message:error?.message,success:false})
        }
    }
}