import { IRepositories } from "./IRepositories";
import { IUserCases } from "./IUseCases";

export interface IDependencies{
    useCase:IUserCases,
    repositories:IRepositories,
}