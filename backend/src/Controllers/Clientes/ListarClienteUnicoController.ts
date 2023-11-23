import { Request, Response } from "express";
import { ListarClienteUnicoServices } from "../../Services/Clientes/ListarClienteUnicoServices";

class ListarClienteUnicoController {
   async handle(req: Request, res: Response){
     const {id} = req.params
     const listarClienteUnicoServices = new ListarClienteUnicoServices()
     const clienteUnico = await listarClienteUnicoServices.execute({
      id
     })
     return res.json(clienteUnico)
   }
}

export { ListarClienteUnicoController }