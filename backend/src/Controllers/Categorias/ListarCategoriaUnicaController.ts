import { Request, Response } from 'express'
import { ListarCategoriaUnicaServices } from '../../Services/Categorias/ListarCategoriaUnicaServices'
class ListarCategoriaUnicaController {
  async handle(req: Request, res: Response){
     const {id} = req.params
     const listarCategoriaUnicaServices = new ListarCategoriaUnicaServices()
     const categoriaUnica = await listarCategoriaUnicaServices.execute({
        id
     })
     return res.json(categoriaUnica)
  }
}

export { ListarCategoriaUnicaController }