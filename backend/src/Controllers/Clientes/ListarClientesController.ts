import { Request, Response } from 'express'
import { ListarClientesServices } from '../../Services/Clientes/ListarClientesServices'

class ListarClientesController {
    async handle(req: Request, res: Response){
    const listarClientesServices = new ListarClientesServices()
    const listarCliente = await listarClientesServices.execute()
    return res.json(listarCliente)
    }
}

export { ListarClientesController }