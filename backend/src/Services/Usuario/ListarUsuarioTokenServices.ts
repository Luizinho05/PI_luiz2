import prismaClient from "../../prisma";

interface TokenId {
    id: string
}

class ListarUsuarioTokenServices{
   async execute({id}: TokenId){
    
      const resposta = await prismaClient.user.findUnique({
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

export { ListarUsuarioTokenServices }