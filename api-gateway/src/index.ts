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
    res.status(200).json({message:`Hello welocome to api gateway,
    /auth
    /admin`})
})

//proxies
app.use("/auth",proxy("http://localhost:1234"));
app.use("/admin",proxy("http://localhost:1235"));
app.use("/product",proxy("http://localhost:1236"));
app.use("/cart",proxy("http://localhost:1237"));


app.listen(PORT,()=>console.log(`
\x1b[32m   ______       _     _________  ________  ____      ____  _     ____  ____  
 .' ___  |     / \\   |  _   _  ||_   __  ||_  _|    |_  _|/ \\   |_  _||_  _| 
/ .'   \\_|    / _ \\  |_/ | | \\_|  | |_ \\_|  \\ \\  /\\  / / / _ \\    \\ \\  / /   
| |   ____   / ___ \\     | |      |  _| _    \\ \\/  \\/ / / ___ \\    \\ \\/ /    
\\ \`.___]  |_/ /   \\ \\_  _| |_    _| |__/ |    \\  /\\  /_/ /   \\ \\_  _|  |_    
 \`._____.'|____| |____||_____|  |________|     \\/  \\/|____| |____||______|                                                                               
 _____   ______                                                              
|_   _|.' ____ \\                                                             
  | |  | (___ \\_|                                                            
  | |   _.____\`.                                                             
 _| |_ | \\____) |                                                            
|_____| \\______.'                                                                                                                                        
   ___   _______  ________  ____  _____                                      
 .'   \`.|_   __ \\|_   __  ||_   \\|_   _|                                     
/  .-.  \\ | |__) | | |_ \\_|  |   \\ | |                                       
| |   | | |  ___/  |  _| _   | |\\ \\| |                                       
\\  \`-'  /_| |_    _| |__/ | _| |\\_\\   |_                                      
 \`._____|_____|  |________||_____|\____|                                                                                                                                                                           
\x1b[0mGateway is Listen to port: ${PORT}`))