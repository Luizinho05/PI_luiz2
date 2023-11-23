import { Request, Response } from "express"
import { AlterarUsuarioServices } from "../../Services/Usuario/AlterarUsuarioSevice"

class AlterarUsuarioController {
    async handle(req: Request, res: Response) {
        const { id, alteraNome, alteraEmail } = req.body
        const alterarUsuarioServices = new AlterarUsuarioServices()
        const response = await alterarUsuarioServices.execute({
            id,
            alteraNome,
            alteraEmail
        })
        return res.json(response)
    }
}

export { AlterarUsuarioController }