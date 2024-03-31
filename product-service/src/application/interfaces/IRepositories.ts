import { Product, ProductData } from "../../domain/entity";

export interface IRepositories{
    addProduct:(data:ProductData)=>Promise<Product|null>;
    listProduct:(token:string)=>Promise<Product[]|null>;
}