
import server from "./presentation/server";
import configDB from "./infrastructure/database/configDB";
import { runConsumer } from "./infrastructure/kafka/consume";

(async () => {
  try {
    server;

    await Promise.all([configDB(), runConsumer()])
      .then(() => console.log("kafka consumer is runnnig"))
      .catch((error) => {
        console.error(`Error while initializing Kafka consumer: ${error}`);
        process.exit(0);
      });
      
  } catch (error: any) {
    console.error(`Error during initialization: ${error.message}`);
    process.exit(1);
  } finally {
    process.on("SIGINT", async () => {
      console.log("\n\nServer is shutting down....");
      process.exit(0);
    });
  }
})();
