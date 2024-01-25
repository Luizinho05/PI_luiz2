import { Request, Response } from 'express'
import { ListarClienteTokenServices } from '../../Services/Clientes/ListarClienteTokenServices'

class ListarClienteTokenController {
    async handle(req: Request, res: Response) {
        const id = req.user_id
        const listarClienteToken = new ListarClienteTokenServices()
        const token = await listarClienteToken.execute({
            id
        })
        return res.json(token)
    }
}

export { ListarClienteTokenController }