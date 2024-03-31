import { IRepositories } from "./IRepositories";
import { IUseCases } from "./IUseCases";

export interface IDependencies{
    useCases:IUseCases;
    repositories:IRepositories;
}