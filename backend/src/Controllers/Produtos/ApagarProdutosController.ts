import { Request, Response } from 'express'
import { ApagarProdutosServices } from '../../Services/Produtos/ApagarProdutosServices'

class ApagarProdutosController{
    async handle(req: Request, res: Response){
    const { deletar } = req.body
    const apagarProdutosServices = new ApagarProdutosServices()
    const apagarProduto = await apagarProdutosServices.execute({
        deletar
    })
    return res.json(apagarProduto)
    }
}

export { ApagarProdutosController }