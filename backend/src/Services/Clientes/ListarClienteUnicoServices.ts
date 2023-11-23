import prismaClient from "../../prisma";

interface ClienteUnico {
    id: string
}

class ListarClienteUnicoServices {
   async execute({id}: ClienteUnico){
       
     const resposta = await prismaClient.client.findUnique({
        where:{
            id: id
        },
        select:{
            id: true,
            nome: true,
            cpf_cnpj: true
        }
     })
       return resposta
   }
}

export { ListarClienteUnicoServices }