import { Request, Response } from 'express'
import { CriarProdutosServices } from '../../Services/Produtos/CriarProdutosServices'

class CriarProdutosController {
    async handle(req: Request, res: Response) {
        const { img, nome, marca, tipo, tamanho, quantidade, preco, categoriaId } = req.body

        if (!req.file) {
            throw new Error('Imagem com problemas!')
        } else {
            
            const { originalname, filename: img } = req.file
            const criarProdutosServices = new CriarProdutosServices()
            const produto = await criarProdutosServices.execute({
                img,
                nome,
                categoriaId,
                marca,
                tipo,
                tamanho,
                quantidade,
                preco
            })
            return res.json(produto)

        }

    }
}

export { CriarProdutosController }