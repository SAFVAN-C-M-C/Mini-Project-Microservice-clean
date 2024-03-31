import { IUserRequestEntity } from "../../../domain/entity/userEntity";
import { User } from "../model/userModel";

export const insertUser=async(data : IUserRequestEntity)=>{
    try {
        const user = new User({
            _id:data._id,
            email:data.email,
            password:data.password,
            username:data.username
        })
        await user.save();
    } catch (error:any) {
        throw new Error(error.message);
    }
}