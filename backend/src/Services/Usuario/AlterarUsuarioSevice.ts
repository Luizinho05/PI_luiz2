import prismaClient from "../../prisma"

interface Alterar {
    id: string
    alteraNome: string
    alteraEmail: string
}

class AlterarUsuarioServices {
    async execute({ id, alteraNome, alteraEmail }: Alterar) {

        await prismaClient.user.update({
            where: {
                id: id
            },
            data: {
                nome: alteraNome,
                email: alteraEmail
            }
        })
        return { dados: "Usuario alterado com sucesso" }
    }
}

export { AlterarUsuarioServices }