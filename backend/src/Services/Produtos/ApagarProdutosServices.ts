import prismaClient from '../../prisma'

interface ApagarProduto{
    deletar: string
}

class ApagarProdutosServices {
  async execute({deletar}: ApagarProduto ){
      
    await prismaClient.products.delete({
        where:{
            id: deletar
        }
       })
       return {dados: 'Produto removido da escala!'}
  }
}

export { ApagarProdutosServices }