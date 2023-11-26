import prismaClient from "../../prisma";

interface CategoriaUnica{
    id: string
}

class ListarCategoriaUnicaServices{
    async execute({id}: CategoriaUnica){

        const resposta = await prismaClient.categorias.findUnique({
            where: {
                id: id
            },
            select:{
                id: true,
                nome: true
            }
        })
        return resposta
    }
}

export { ListarCategoriaUnicaServices }