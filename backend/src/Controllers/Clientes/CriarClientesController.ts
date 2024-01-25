import { Request, Response } from 'express'
import { CriarClientesServices } from '../../Services/Clientes/CriarClientesServices'

class CriarClientesController {
    async handle(req: Request, res: Response){
    const { nome, email, password, idade, telefone, cpf_cnpj, rg_ie, cep, cidade, estado, bairro, rua,
          complemento, endereco } = req.body
    const criarClientesServices = new CriarClientesServices()
    const cliente = await criarClientesServices.execute({
        nome,
        email,
        password,
        idade,
        telefone,
        cpf_cnpj,
        rg_ie,
        cep,
        estado,
        cidade,
        bairro,
        rua,
        complemento,
        endereco
    })
    return res.json(cliente)
    }
}

export { CriarClientesController }