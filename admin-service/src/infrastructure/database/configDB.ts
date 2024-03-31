import mongoose,{connect} from "mongoose";
import { config } from "dotenv";
export default async ()=>{
    config()
    try {
        await mongoose.connect(String(process.env.MONGO_URI).trim());
        console.log(`🍃🍃🍃🍃🍃🍃 Database connected with MongoDB 🍃🍃🍃🍃🍃🍃`); 
        console.log(`
        \x1b[32m        ______   ______                                                   _                __  
               |_   _ '.|_   _ \\                                                 / |_             |  ] 
                 | | '. \\ | |_) |   .---.   .--.   _ .--.   _ .--.  .---.  .---.  | |-'.---.   .--.| |  
                 | |  | | |  __'.  / /'\\]/ .'\\ \\[ \`.-. | [ \`.-. |/ /__\\/ /'\\'\\ | | / /__\\/ /'\\' |  
                _| |_.' /_| |__) | | \\__. | \\__. | | | | |  | | | || \\__.,| \\__. || |,| \\__.,| \\__/  |  
               |______.'|_______/  '.___.' '.__.' [___||__][___||__]'.__.''.___.' \\__/ '.__.' '.__.;__] 
                                                                                                       
        \x1b[0m🍃🍃🍃🍃🍃🍃 MongoDB admin connected successfully! 🍃🍃🍃🍃🍃🍃`);
      } catch (error: any) {
        console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
        console.error(error.message);
        process.exit(1);
      }
}