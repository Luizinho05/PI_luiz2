import prismaClient from '../../prisma'

class ListarCategoriasServices {
   async execute(){
    const listarCategoria = await prismaClient.categorias.findMany({})
    return (listarCategoria)
   }
}

export { ListarCategoriasServices }