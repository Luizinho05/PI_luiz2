import prismaClient from '../../prisma'

interface CriarCategoria {
    nome: string
}

class CriarCategoriasServices {
    async execute({ nome }: CriarCategoria) {
        
        const resposta = await prismaClient.categorias.create({
            data:{
                nome: nome
            }
        })
        return{resposta}
    }
}

export { CriarCategoriasServices }