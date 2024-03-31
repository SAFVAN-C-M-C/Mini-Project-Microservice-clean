import { UserData } from "../entities/UserData";
import { UserEntity } from "../entities/UserEntity";

export interface IAddUserUseCase{
    execute(userData:UserData):Promise<UserEntity|null>;
}