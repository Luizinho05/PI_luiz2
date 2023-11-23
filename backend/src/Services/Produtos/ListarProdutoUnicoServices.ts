import prismaClient from "../../prisma";

interface ProdutoUnico {
    id: string
}

class ListarProdutoUnicoServices {
  async execute({id}: ProdutoUnico){

    const resposta = await prismaClient.products.findUnique({
        where:{
            id: id
        },
        select:{
            id: true,
            nome: true,
            preco: true,
            tamanho: true
        }
    })
    return {resposta}
  }
}

export { ListarProdutoUnicoServices }