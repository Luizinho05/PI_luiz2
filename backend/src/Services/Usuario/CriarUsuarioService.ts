import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface Criar {
    nome: string
    email: string
    password: string
}

class CriarUsuarioService {
    async execute({ nome, email, password }: Criar) {

        if (!nome || !email || !password) {
            throw new Error("Campos obrigatórios em branco!")
        }

        const verificarEmail = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (verificarEmail) {
            throw new Error("Email já cadastrado!")
        }

        const senhaCrypt = await hash(password, 8)
        await prismaClient.user.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return { dados: "Usuario criado com sucesso" }
    }
}

export { CriarUsuarioService }