import { Product } from "../../../domain/entity";
import { verifyToken } from "../../../util/verifyToken";
import { Products } from "../model/products";

export const listProduct = async (token: string): Promise<Product[] | null> => {
  try {
    const decodedToken: any = verifyToken(token);

    const role: string | undefined = decodedToken?.role;

    if (!role) {
      throw new Error("Role not found in token payload");
    }
    if (role === "user") {
      throw new Error(
        "Unauthorized access: User role does not have permission to list products"
      );
    }
    const products: Product[] = await Products.find();
    return products;
  } catch (error: any) {
    console.error("Failed to list products:", error);
    throw new Error("Failed to list products");
  }
};
