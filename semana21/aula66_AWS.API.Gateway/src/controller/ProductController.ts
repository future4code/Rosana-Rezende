import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductDatabase } from "../data/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class ProductController{

    private static ProductBusiness = new ProductBusiness(
        new ProductDatabase(),
        new IdGenerator()
    )
    
    public async createProduct(req: Request, res: Response){
        const { name, image, price } = req.body
        try{
            await ProductController.ProductBusiness.createProduct(name, image, price)
            res.status(200).send({ message: "Produto criado com sucesso!"})
        }
        catch(err){
            res.status(400).send({ message: err.message })
        }
    }

    public async getProductById(req: Request, res: Response){
        const { id } = req.params
        try{
            const result = await ProductController.ProductBusiness.getProductById(id)
            res.status(200).send(result)
        }
        catch(err){
            res.status(400).send({ message: err.message })
        }
    }


}