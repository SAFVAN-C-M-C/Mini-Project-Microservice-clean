import express,{Application,Request,Response,NextFunction} from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { productRouter } from "../infrastructure/routes/productRouter";
import { dependencies } from "../config/dependencies";
config();

const app:Application=express();
const PORT:number = Number(process.env.PORT)||1236

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use('/',productRouter(dependencies))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const errorResponse={
        errors:[{message:err?.message}]
    }
    return res.status(500).json(errorResponse)
});
app.listen(PORT,()=>{
    console.log(`product service is runnig at port ${PORT}`);
})
export default app