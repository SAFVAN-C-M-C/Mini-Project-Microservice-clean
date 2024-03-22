import express,{Application,Request,Response, Router} from 'express'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import { userRoutes } from '../infrastructure/routes/userRouter';
import dependencies from '../config/dependencies';

config()
const app:Application=express();
const PORT:number=Number(process.env.PORT) || 1234;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:"user service is running!"})
})
app.use("/user",userRoutes(dependencies))
app.listen(PORT,()=>{
    console.log(`User service is running on the port : ${PORT}\nhttp://localhost:${PORT}`);
})
export default app