import prismaClient from "../../prisma";

export class ListarUsuarioService {
    async execute() {
        const response = await prismaClient.user.findMany({})
        return (response)
    }
}
