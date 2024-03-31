import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controller } from "../../presentation/controller";
import {Request,Response} from 'express'
export const productRouter=(dependencies:IDependencies)=>{
    const {listProduct,addProduct}=controller(dependencies)
    const router=Router()
    router.route('/').get((req:Request,res:Response)=>{
        res.status(200).json({message:"welcome to product service"})
    })
    router.route('/addProduct').post(addProduct)
    router.route('/listProdut').get(listProduct)
    return router
}