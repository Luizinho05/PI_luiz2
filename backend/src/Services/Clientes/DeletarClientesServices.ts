import prismaClient from "../../prisma";

interface DeletarCliente{
    apagar: string
}

class DeletarClienteServices{
    async execute({apagar}: DeletarCliente){
      
        await prismaClient.client.delete({
            where:{
                id: apagar
            }
        })
        return { dados: 'Dados deletados com sucesso!' }
    }
}

export { DeletarClienteServices }