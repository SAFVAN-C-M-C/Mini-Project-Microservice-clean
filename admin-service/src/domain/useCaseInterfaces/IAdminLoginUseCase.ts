import { AdminEntity } from "../entities/AdminEntity";
import { AdminLoginData } from "../entities/AdminLoginData";

export interface IAdminLoginUseCase{
    execute(credentials:AdminLoginData):Promise<AdminEntity|null>;
}