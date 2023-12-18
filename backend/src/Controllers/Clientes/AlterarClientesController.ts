import { Request, Response } from 'express'
import { AlterarClientesServices } from '../../Services/Clientes/AlterarClientesServices'

class AlterarClientesController {
    async handle(req: Request, res: Response) {
        const {
            id, alteraNome, alteraIdade, alteraTelefone, alteraCep, alteraCidade,
            alteraEstado, alteraBairro, alteraRua, alteraComplemento,
            alteraEndereco
        } = req.body
        const alterarClientesServices = new AlterarClientesServices()
        const update = await alterarClientesServices.execute({
            id,
            alteraNome,
            alteraTelefone,
            alteraIdade,
            alteraCep,
            alteraEstado,
            alteraCidade,
            alteraBairro,
            alteraRua,
            alteraComplemento,
            alteraEndereco
        })
        return res.json(update)
    }
}

export { AlterarClientesController }