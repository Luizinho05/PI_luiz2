import { Request, Response } from "express";
import { AlterarCategoriaServices } from '../../Services/Categorias/AlterarCategoriaServices'

class AlterarCategoriaController{
    async handle(req: Request, res: Response){
        const { id, alteraNome } = req.body
        const alterarCategoriaServices = new AlterarCategoriaServices()
        const update = await alterarCategoriaServices.execute({
            id,
            alteraNome
        })
        return res.json(update)
    }
}

export { AlterarCategoriaController }