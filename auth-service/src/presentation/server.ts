import express,{Application,NextFunction,Request,Response, Router} from 'express'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import { authRoutes } from '../infrastructure/routes/authRouter';
import {dependencies} from '../config/dependencies';

config()
const app:Application=express();
const PORT:number=Number(process.env.PORT) || 1234;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())


app.use("/",authRoutes(dependencies))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const errorResponse={
        errors:[{message:err?.message}]
    }
    return res.status(500).json(errorResponse)
});
app.listen(PORT,()=>{
    console.log(`User service is running on the port : ${PORT}\nhttp://localhost:${PORT}`);
})
export default app