import prismaClient from '../../prisma'

class ListarClientesServices {
  async execute(){
    const clientes = await prismaClient.client.findMany({})
    return (clientes)
  }
}

export { ListarClientesServices }