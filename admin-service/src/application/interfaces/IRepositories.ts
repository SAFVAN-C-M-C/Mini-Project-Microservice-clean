import { AdminData } from "../../domain/entities/AdminData";
import { AdminEntity } from "../../domain/entities/AdminEntity";
import { AdminLoginData } from "../../domain/entities/AdminLoginData";
import { UserData } from "../../domain/entities/UserData";
import { UserEntity } from "../../domain/entities/UserEntity";


export interface IRepositories{
    adminLogin:(data:AdminLoginData)=>Promise<AdminEntity|null>;
    addUser:(data:UserData)=>Promise<UserEntity|null>;
    addAdmin:(data:AdminData)=>Promise<AdminEntity|null>;
}