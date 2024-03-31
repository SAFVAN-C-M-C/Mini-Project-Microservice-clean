import userCreatedConsumers from "./consumers/userCreatedConsumers";


export const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumers
    }
}