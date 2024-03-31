import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controller } from "../../presentation/controllers";
import { Request,Response } from "express";
export const adminRoutes=(dependencies:IDependencies)=>{
    const {addAdmin,addUser,adminLogin} =controller(dependencies)
    const router=Router()
    router.route('/').get((req:Request,res:Response)=>{
        res.status(200).json({message:"Welcome to admin server"})
    })
    router.route('/login').post(adminLogin);
    router.route('/addAdmin').post(addAdmin);
    router.route('/addUser').post(addUser);
    return router;
}