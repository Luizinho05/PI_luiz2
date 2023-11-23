import prismaClient from "../../prisma";

class ListarProdutosServices {
  async execute(){
    const produtos = await prismaClient.products.findMany({})
    return (produtos)
  }
}

export { ListarProdutosServices }