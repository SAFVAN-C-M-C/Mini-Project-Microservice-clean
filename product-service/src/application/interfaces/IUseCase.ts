
import { IAddProductUseCase, IListProductUseCase } from "../../domain/useCaseInterfaces";
import { IDependencies } from "./IDependencies";

export interface IUseCase{
    addProductUseCase:(dependencies:IDependencies)=>IAddProductUseCase;
    listProductUseCase:(dependencies:IDependencies)=>IListProductUseCase;
}