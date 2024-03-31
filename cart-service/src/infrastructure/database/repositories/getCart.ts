import { CartEntity } from "../../../domain/entity/cartEntity";
import { CartModel } from "../model/cartModel";
import { ObjectId } from 'mongodb';

export const getCart = async (userid: string): Promise<CartEntity | null> => {
 try {

    
    
    const cartDocument: CartEntity | null = await CartModel.findOne({ userId:new ObjectId(userid) });
    console.log(cartDocument);
    
    if (!cartDocument) {
      throw new Error("cart not found");
    }
    const cart: CartEntity = {
      userId: cartDocument.userId,
      items: cartDocument.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity
      }))
  };
  
  return cart;
 } catch (error:any) {
    console.error("Error retrieving user's cart:", error);
    throw error;
 }
};
