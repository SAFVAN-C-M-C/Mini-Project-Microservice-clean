import { Router } from "express"
import { controllers } from "../../presentation/controller"

export const userRoutes =(dependencies:any)=> {
    const {login,signup}=controllers(dependencies)
    const router=Router()
    router.route('/signup').post(signup)
    router.route('/login').post(login)
    return router
}