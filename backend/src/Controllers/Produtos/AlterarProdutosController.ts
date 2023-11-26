import { Request, Response } from 'express'
import { AlterarProdutosServices } from '../../Services/Produtos/AlterarProdutosServices'

class AlterarProdutoController {
    async handle(req: Request, res: Response) {
        const { id, alteraNome, alteraMarca,
        alteraTamanho, alteraCategoria, alteraQuantidade,
        alteraPreco, alteraTipo, alteraImg } = req.body

        if (!req.file) {
            throw new Error('imagem com problema!')
        } else {

            const { originalname, filename: alteraImg } = req.file
            const alterarProdutosServices = new AlterarProdutosServices()
            const alterar = await alterarProdutosServices.execute({
                id,
                alteraNome,
                alteraMarca,
                alteraTamanho,
                alteraCategoria,
                alteraQuantidade,
                alteraPreco,
                alteraTipo,
                alteraImg
            })
            return res.json(alterar)

        }

    }
}

export { AlterarProdutoController }