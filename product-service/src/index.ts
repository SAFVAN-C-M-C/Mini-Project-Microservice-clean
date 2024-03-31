import configDB from './infrastructure/database/configDB';
import server from './presentation/server'
(async()=>{
    try{
        server
        configDB()
    }catch(error:any){
        console.log("error while intitating admin",error?.message);
    }finally{
        process.on("SIGINT",async()=>{
            console.log("\n\n server is shutting down");
            process.exit()
        })
    }
})();