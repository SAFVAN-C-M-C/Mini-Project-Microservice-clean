import { NextFunction, Request, Response } from "express"
import {UserEntity} from '../../domian/Entities'
import { hashPassword } from "../../util/bcrypt/hashPassword"
import jwt from "jsonwebtoken"
import { IDependencies } from "../../application/interfaces/IDependencies"

export const userSignUp=(dependencies:IDependencies)=>{
    const {useCase:{signUpUseCase,findUserByEmailUseCase}}=dependencies
    return async(req:Request,res:Response,next:NextFunction)=>{
        
        try {
            const userCredentials=req.body;

            if(!userCredentials?.username.trim()){
                res.status(400).json({success:false,message:"username can not be empty"})
                return;
            }
            if(!userCredentials?.email ||!userCredentials?.password){
                res.status(400).json({ success: false, message: "Email and password are required" });
                return;
            }
            const emailRegX=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegX.test(userCredentials?.email)){
                res.status(400).json({ success: false, message: "Invalid Email" });
                return;
            }
            if (userCredentials?.password.length < 6) {
                res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
                return; 
            }
            try{
                const existingUser=await findUserByEmailUseCase(dependencies).execute(userCredentials?.email)
                if(existingUser){
                    res.status(400).json({ success: false, message: "Email already exists" })
                    return
                }
            }catch(error:any){
                console.log(error?.message);
            }
            const hashedPass:string|null=await hashPassword(userCredentials.password)
            userCredentials.password=hashedPass
            
            const user=await signUpUseCase(dependencies).execute(userCredentials);
            if(user){
                const userId:string=user?._id?String(user?._id):""
                const payload={
                    _id:userId,
                    email:user?.email,
                    name:user?.username,
                    isAdmin:user?.isAdmin,
                    isBlocked:user?.isBlocked
                }             
                const accessToken = jwt.sign(payload,String(process.env.ACCESS_TOKEN_SECRET),{expiresIn:"1h"});
                res.cookie("jw_token",accessToken,{maxAge: 1000 * 60 * 60 * 24,httpOnly:true})
                res.status(201).json({message:"User created successfully",success:true, user: user})
            }else{
                res.status(404).json({ success: false, message: "error while creating user" });
            }
        } catch (error:any) {
            next(error)
        }
    }
}