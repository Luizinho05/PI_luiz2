import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface LoginCliente {
    email: string
    password: string
}

export class LoginClienteServices{
    async execute({email, password}:LoginCliente){
    
        const cliente = await prismaClient.client.findFirst({
            where: {
                email: email
            }
        })

        if (!cliente){
            throw new Error('Usuário/Senha incorretos!')
        }

        const auth = await compare(password, cliente.senha)
        if(!auth){
            throw new Error('Usuário/Senha incorretos!')
        }

        const tokenCliente = sign(
            {
                id: cliente.id,
                email: cliente.email,
            },
            process.env.AUTH_TOKEN,
            {
                subject: cliente.id,
                expiresIn: '99h'
            }
        )

        return {
            id: cliente.id,
            email: cliente.email,
            token: tokenCliente
        }
    }
}