import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { AdminEntity } from "../../domain/entities/AdminEntity";
import jwt from "jsonwebtoken";
export const adminLoginController = (dependencies: IDependencies) => {
  const {
    useCases: { adminLoginUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const adminCredentials = req.body;
      const admin: AdminEntity | null = await adminLoginUseCase(
        dependencies
      ).execute(adminCredentials);
      if (admin) {
        if (admin?.role === "admin") {
          let payload = {
            _id: String(admin?._id),
            email: admin?.email,
            role: admin?.role,
            username: admin?.username,
          };
          const accessToken = jwt.sign(
            payload,
            String(process.env.ACCESS_TOKEN_SECRET),
            { expiresIn: "1h" }
          );
          res.cookie("jw_token", accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
          });
          res.status(200).json({
            success: true,
            user: admin,
            message: "Admin verified!",
          });
        }else{
            res.status(401).json({error: "Unauthorized: Insufficient role privileges",success:false})
        }
      }else{
        res.status(401).json({error: "Unauthorized",success:false})
      }
    } catch (error) {
        next(error)
    }
  };
};
