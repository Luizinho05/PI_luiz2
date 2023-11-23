import { Request, Response } from "express";
import { ListarUnicoUsuarioServices } from "../../Services/Usuario/ListarUnicoUsuarioService";

class ListarUnicoUsuarioController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const listarUnicoUsuario = new ListarUnicoUsuarioServices()
        const response = await listarUnicoUsuario.execute({
            id
        })
        return res.json(response)
    }
}

export { ListarUnicoUsuarioController }