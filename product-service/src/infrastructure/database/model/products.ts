import mongoose, { Schema } from "mongoose";
import { Product } from "../../../domain/entity/Products";

const productSchema: Schema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },{ timestamps : true });
  
  export const Products = mongoose.model<Product & Document>(
    "product",
    productSchema
  );