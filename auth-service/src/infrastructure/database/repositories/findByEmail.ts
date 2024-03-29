import { threadId } from "worker_threads"
import { User } from "../models/user"
import { promises } from "dns"
import { UserEntity } from "../../../domian/Entities"

export const findByEmail=async(email:string):Promise<UserEntity|null>=>{
    try {
        const user:UserEntity|null= await User.findOne({email})
        return user
    } catch (error:any) {
        throw new Error(error?.message)
    }
}