import { Router } from "express";
import { controllers } from "../../presentation/controller";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request,Response } from "express";
export const authRoutes = (dependencies: IDependencies) => {
  const { login, signup } = controllers(dependencies);
  const router = Router();
  router.route('/').get((req:Request,res:Response)=>{
    res.status(200).json({message:"user service is running!"})
})
  router.route("/signup").post(signup);
  router.route("/login").post(login);
  return router;
};
