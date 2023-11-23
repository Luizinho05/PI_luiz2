import { Request, Response } from 'express'
import { ListarProdutoUnicoServices } from '../../Services/Produtos/ListarProdutoUnicoServices'

class ListarProdutoUnicoController {
   async handle(req: Request, res: Response){
     const {id} = req.params
     const listarProdutoUnicoServices = new ListarProdutoUnicoServices()
     const produtoUnico = await listarProdutoUnicoServices.execute({
        id
     })
     return res.json(produtoUnico)
   }
}

export { ListarProdutoUnicoController }