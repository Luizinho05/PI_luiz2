import { Request, Response } from 'express'
import { DeletarClienteServices } from '../../Services/Clientes/DeletarClientesServices'

class DeletarClientesController{
  async handle(req: Request, res: Response){
     const { apagar } = req.body
     const deletarClienteServices = new DeletarClienteServices()
     const deletar = await deletarClienteServices.execute({
        apagar
     })
     return res.json(deletar)
  }
}

export { DeletarClientesController }