import prismaClient from "../../prisma";

interface TokenId{
    id: string
}

class ListarClienteTokenServices{
    async execute({id}: TokenId){

        const resposta = await prismaClient.client.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return resposta
    }
}

export { ListarClienteTokenServices }