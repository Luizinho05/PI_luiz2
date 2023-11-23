import { Request, Response } from "express";
import { DeletarUsuarioService } from "../../Services/Usuario/DeletarUsuarioService";

export class DeletarUsuarioController {
    async handle(req: Request, res: Response) {
        const { usuarioId } = req.body
        const deletar = new DeletarUsuarioService()
        const response = await deletar.execute({
            usuarioId
        })
        return res.json(response)
    }
}