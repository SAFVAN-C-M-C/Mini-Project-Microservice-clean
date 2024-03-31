import { IGetCartUseCase,IAddToCartUseCase } from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases{
    addToCartUseCase:(dependencies:IDependencies)=>IAddToCartUseCase;
    getCartUseCase:(dependencies:IDependencies)=>IGetCartUseCase;
}