import { Request, Response } from 'express'
import { LoginClienteServices } from '../../Services/Clientes/LoginClienteServices'

export class LoginClienteController {
    async handle(req: Request, res: Response){
        const { email, password } = req.body
        const loginCliente = new LoginClienteServices()
        const cliente = await loginCliente.execute({
            email,
            password
        })
        return res.json(cliente)
    }
}