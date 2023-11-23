import prismaClient from "../../prisma"

interface ListarUnico {
    id: string
}

class ListarUnicoUsuarioServices {
    async execute({ id }: ListarUnico) {

        const response = await prismaClient.user.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return response
    }
}

export { ListarUnicoUsuarioServices }