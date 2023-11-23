import { Request, Response } from "express"
import { CriarUsuarioService } from "../../Services/Usuario/CriarUsuarioService"

class CriarUsuarioController {
    async handle(req: Request, res: Response) {
        const { nome, email, password } = req.body
        const criar = new CriarUsuarioService()
        const response = await criar.execute({
            nome, email, password
        })
        return res.json(response)
    }
}

export { CriarUsuarioController }