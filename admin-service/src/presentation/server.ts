import express,{ Request,Application,Response, NextFunction } from "express";
import cookieParser from "cookie-parser";

import { config } from "dotenv";
import { adminRoutes } from "../infrastructure/routes/adminRoutes";
import { dependencies } from "../config/dependencies";
config()
const app:Application=express()
const PORT:Number=Number(process.env.PORT)||1235



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/',adminRoutes(dependencies));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const errorResponse={
        errors:[{message:err?.message}]
    }
    return res.status(500).json(errorResponse)
});

app.listen(PORT,()=>{
    console.log(`admin service is runnig at port:${PORT}`);
})

export default app