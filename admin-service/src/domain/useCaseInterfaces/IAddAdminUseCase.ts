import { AdminData } from "../entities/AdminData";
import { AdminEntity } from "../entities/AdminEntity";


export interface IAddAdminUseCase{
    execute(data:AdminData):Promise<AdminEntity|null>;
}