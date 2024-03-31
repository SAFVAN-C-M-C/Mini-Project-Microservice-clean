import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller"
import { Request, Response } from "express";

export const cartRoutes=(dependencies:IDependencies)=>{
const {users,getCart} = controllers(dependencies)
    const router=Router();
    router.route('/').get((req:Request,res:Response)=>{
        res.status(200).json({message:"welocme to cart service"})
    })
    router.route("/addtocart").post(users)
    router.route("/getcart/:id").get(getCart)

    return router;
}