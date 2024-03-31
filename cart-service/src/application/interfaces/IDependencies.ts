import {IUseCases} from "./IUseCase"
import { IRepositories } from "./IRepositories"

export interface IDependencies{
    repositories:IRepositories;
    useCases:IUseCases;
}