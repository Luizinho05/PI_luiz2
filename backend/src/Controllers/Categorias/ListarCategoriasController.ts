import { Request, Response } from 'express'
import { ListarCategoriasServices } from '../../Services/Categorias/ListarCategoriasServices'

class ListarCategoriasController {
   async handle(req: Request, res: Response){
   const listarCategoriasServices = new ListarCategoriasServices()
   const listarCategoria = await listarCategoriasServices.execute()
   return res.json(listarCategoria)
   }
}

export { ListarCategoriasController }