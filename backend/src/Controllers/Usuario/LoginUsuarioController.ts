import { Request, Response } from "express"
import { LoginUsuarioService } from "../../Services/Usuario/LoginUsuarioService"

export class LoginUsuarioController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        const login = new LoginUsuarioService()
        const response = await login.execute({
            email,
            password
        })
        return res.json(response)
    }
}