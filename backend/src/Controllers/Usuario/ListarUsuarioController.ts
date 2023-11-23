import { Request, Response } from "express";
import { ListarUsuarioService } from "../../Services/Usuario/ListarUsuarioService";

export class ListarUsuarioController {
    async handle(req: Request, res: Response) {
        const listar = new ListarUsuarioService()
        const response = await listar.execute()
        return res.json(response)
    }

}