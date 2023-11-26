import prismaClient from "../../prisma";

interface AlterarCategoria{
    id: string
    alteraNome: string
}

class AlterarCategoriaServices{
    async execute({
        id,
        alteraNome
    }: AlterarCategoria) {
        
        await prismaClient.categorias.update({
            where: {
                id: id
            },
            data: {
                nome: alteraNome
            }
        })
        return { dados: 'Dados Alterados com sucesso!' }
    }
   
}

export { AlterarCategoriaServices }