import express, { Application, NextFunction, Response,Request } from "express"
import cookieParser from "cookie-parser"
import cors from "cors";
import proxy from "express-http-proxy";


const app:Application=express();
const PORT=process.env.PORT || 8080


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

//welocme to gateway

app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:"Hello welocome to api gateway,/auth"})
})

//proxies
app.use("/auth",proxy("http://localhost:1234"));


app.listen(PORT,()=>console.log(`Gateway is Listen to port: ${PORT}`))