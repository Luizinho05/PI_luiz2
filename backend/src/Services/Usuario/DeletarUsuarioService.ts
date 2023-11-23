import prismaClient from "../../prisma";

interface Deletar {
    usuarioId: string
}

export class DeletarUsuarioService {
    async execute({ usuarioId }: Deletar) {

        await prismaClient.user.delete({
            where: {
                id: usuarioId
            }
        })

        return { dados: "Usuario deletado com sucesso" }
    }
}