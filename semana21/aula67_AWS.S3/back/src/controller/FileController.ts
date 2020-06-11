import { Request, Response } from "express"
import { S3Service } from "../services/S3Service"

const s3Service = new S3Service()

export class FileController{
    
    public async fileUpload(req: Request, res: Response): Promise<void>{
        try{
            const file = req.files && (req.files.file as any)
            if(!file){
                throw new Error("Você precisa enviar um arquivo")
            }
            const result = await s3Service.uploadFile({
                name: file.name,
                file: file.data
            })
            res.status(200).send(result)
        }
        catch(err){
            console.log(err.message)
            res.status(400).send({ message: err.message })
        }
    }

}