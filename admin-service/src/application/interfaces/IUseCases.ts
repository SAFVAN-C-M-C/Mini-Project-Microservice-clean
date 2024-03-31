import { IDependencies } from "./IDependencies";
import { IAdminLoginUseCase,IAddUserUseCase } from "../../domain/useCaseInterfaces";
import { IAddAdminUseCase } from "../../domain/useCaseInterfaces/IAddAdminUseCase";

export interface IUseCases{
    adminLoginUseCase:(dependencies:IDependencies)=>IAdminLoginUseCase;
    addUserUseCase:(dependencies:IDependencies)=>IAddUserUseCase;
    addAdminUseCase:(dependencies:IDependencies)=>IAddAdminUseCase;
}