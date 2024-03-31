import mongoose,{connect} from "mongoose";
import { config } from "dotenv";
export default async ()=>{
    config()
    try {
        connect(String(process.env.MONGO_URI).trim())
        .then(()=>console.log(`
        \x1b[32m        ______   ______                                                   _                __  
               |_   _ '.|_   _ \\                                                 / |_             |  ] 
                 | | '. \\ | |_) |   .---.   .--.   _ .--.   _ .--.  .---.  .---.  | |-'.---.   .--.| |  
                 | |  | | |  __'.  / /'\\]/ .'\\ \\[ \`.-. | [ \`.-. |/ /__\\/ /'\\'\\ | | / /__\\/ /'\\' |  
                _| |_.' /_| |__) | | \\__. | \\__. | | | | |  | | | || \\__.,| \\__. || |,| \\__.,| \\__/  |  
               |______.'|_______/  '.___.' '.__.' [___||__][___||__]'.__.''.___.' \\__/ '.__.' '.__.;__] 
                                                                                                       
        \x1b[0m🍃🍃🍃🍃🍃🍃 MongoDB connected successfully! 🍃🍃🍃🍃🍃🍃`))
        .catch((err)=>{
            console.log(err.message);
        })
    } catch (error) {
        throw new Error("Error in connecting admin-database");
    }
}