import prismaClient from '../../prisma'

interface CriarProduto{
    nome: string
    marca: string
    tamanho: string
    quantidade: string
    preco: string
    img: string
    tipo: string
    categoriaId: string
}

class CriarProdutosServices{
   async execute({
    nome,
    categoriaId,
    marca,
    tamanho,
    quantidade,
    preco,
    img,
    tipo
   }: CriarProduto){
        if(!nome || !categoriaId || !marca || !tamanho || 
            !quantidade || !preco || !img || !tipo){
            throw new Error('Campos em branco não são permitidos!')
            }

            await prismaClient.products.create({
                data:{
                    nome: nome,
                    marca: marca,
                    tamanho: tamanho,
                    quantidade: quantidade,
                    preco: preco,
                    img: img,
                    tipo: tipo,
                    categoriaId: categoriaId
                }
            })
            return { dados: 'Produto locado com sucesso!' }
   }
}

export { CriarProdutosServices }