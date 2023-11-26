import { Request, Response } from 'express'
import { ExcluirCategoriaServices } from '../../Services/Categorias/ExcluirCategoriaServices'

class ExcluirCategoriaController{
    async handle(req: Request, res: Response){
        const { excluir } = req.body
        const excluirCategoriaServices = new ExcluirCategoriaServices()
        const deletar = await excluirCategoriaServices.execute({
            excluir
        })
        return res.json(deletar)
    }
}

export { ExcluirCategoriaController }