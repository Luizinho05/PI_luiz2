import prismaClient from "../../prisma";

interface excluirCategoria{
    excluir: string
}

class ExcluirCategoriaServices{
    async execute({excluir}: excluirCategoria){

        await prismaClient.categorias.delete({
            where:{
                id: excluir
            }
        })
        return { dados: 'Dados excluidos com sucesso' }
    }
}

export { ExcluirCategoriaServices }