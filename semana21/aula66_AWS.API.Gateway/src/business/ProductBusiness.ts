import { ProductDatabase } from "../data/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Product } from "../model/Product";


export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        // private hashManager: HashManager,
        // private authenticator: Authenticator,
    ) { }

    public async createProduct(name: string, image: string, price: number){
        if (!name || !image || !price) {
            throw new Error("Missing input");
        }
        
        const id = this.idGenerator.generatorId()
        const newProduct = new Product(id, name, image, price)

        await this.productDatabase.createProduct(newProduct)

    }

    public async getProductById(id: string){
        if(!id){
            throw new Error("Missing input");
        }

        const user = await this.productDatabase.getProductById(id)

        return user
    }

}