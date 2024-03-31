import e from "express";
import { Product, ProductData } from "../../../domain/entity";
import { Products } from "../model/products";

export const addProduct=async(data:ProductData)=>{
    try {
        const existingProduct:Product|null=await Products.findOne({name:data?.name});
        if(existingProduct){
            throw new Error("product already exist")
        }
        const newProduct=new Products(data);
        const savedproduct=await newProduct.save();
        return savedproduct as Product;
    } catch (error:any) {
        console.error("Error adding product:", error?.message);
        throw new Error("Failed to add product.");
    }
}