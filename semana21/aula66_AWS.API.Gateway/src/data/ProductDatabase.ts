import { BaseDatabase } from "./BaseDatabase";
import { Product } from "../model/Product";

export class ProductDatabase extends BaseDatabase {

    public static TABLE_NAME: string = "StorenuProduct";

    private toModel(dbModel?: any): Product | undefined {
        return (
            dbModel &&
            new Product(
                dbModel.id,
                dbModel.name,
                dbModel.image,
                dbModel.price,
            )
        );
    }

    public async createProduct(product: Product): Promise<void> {
        await super.connection()
            .insert({
                id: product.getId(),
                name: product.getName(),
                image: product.getImage(),
                price: product.getPrice(),
            })
            .into(ProductDatabase.TABLE_NAME)
    }

    public async getProductById(id: string): Promise<Product | undefined>{
        const result = await super.connection()
            .select("*")
            .from(ProductDatabase.TABLE_NAME)
            .where({ id })
        
        return this.toModel(result[0])
    }

}