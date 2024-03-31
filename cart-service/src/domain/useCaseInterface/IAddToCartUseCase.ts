import { AddToCartRequest, CartEntity } from "../entity/cartEntity";

export interface IAddToCartUseCase{
    execute(data:AddToCartRequest):Promise<CartEntity | null>;
}