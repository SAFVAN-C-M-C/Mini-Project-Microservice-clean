import configDB from "./src/infrastructure/database/configDB";
import server from "./src/presentation/server";

(async()=>{
    try{
        server;
        await configDB()
    }catch(err:any){
        console.log(err,"Error on starting app");
    }finally{
        process.on("SIGINT",async()=>{
            console.log("\n\n server is shutting down");
            process.exit()
        })
    }
})()