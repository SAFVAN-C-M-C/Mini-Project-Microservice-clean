import { NextFunction, Request, Response } from "express"
import {userEntity} from '../../domian/Entities'
import { hashPassword } from "../../util/bcrypt/hashPassword"
import jwt from "jsonwebtoken"

export const userSignUp=(dependencies:any)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {useCase:{signupUsecase}}=dependencies
        try {
            const userCredentials:userEntity=req.body
            userCredentials.password=await hashPassword(userCredentials.password)
            
            const signed=await signupUsecase(dependencies).execute(userCredentials);
            if(!signed){
                throw new Error("error while creating user");
            }else{
                const payload={
                    _id:String(signed?._id),
                    email:signed?.email,
                    name:signed?.name,
                    role:signed?.isisAdmin?"admin":"user"
                }
                console.log(String(process.env.ACCESS_TOKEN_SECRET));
                
                const accessToken = jwt.sign(payload,String(process.env.ACCESS_TOKEN_SECRET),{expiresIn:"1h"});
                res.cookie("jw_token",accessToken,{httpOnly:true})
            }
            res.status(201).json({message:"User created successfully",success:true, user: signed})

        } catch (error:any) {
            console.log(error,"error in signup");
            res.json({message:error?.message,success:false  })
        }
    }
}