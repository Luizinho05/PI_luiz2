import { Request, Response } from 'express'
import { ListarUsuarioTokenServices } from '../../Services/Usuario/ListarUsuarioTokenServices'

class ListarUsuarioTokenController{
    async handle(req: Request, res: Response){
    const id = req.user_id
    const listarUsuarioToken = new ListarUsuarioTokenServices()
    const token = await listarUsuarioToken.execute({
        id
    })
    return res.json(token)
    }
}

export { ListarUsuarioTokenController }