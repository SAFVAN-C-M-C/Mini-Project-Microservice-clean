import { Product, ProductData } from "../entity";


export interface IAddProductUseCase{
    execute(data:ProductData):Promise<Product|null>
}