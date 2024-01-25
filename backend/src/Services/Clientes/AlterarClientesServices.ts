import prismaClient from '../../prisma'

interface AlterarCliente {
    id: string
    alteraNome: string
    alteraPassword: string
    alteraIdade: string
    alteraTelefone: string
    alteraCep: string
    alteraEstado: string
    alteraCidade: string
    alteraBairro: string
    alteraRua: string
    alteraComplemento: string
    alteraEndereco: string
}

class AlterarClientesServices {
    async execute({
        id,
        alteraNome,
        alteraPassword,
        alteraIdade,
        alteraTelefone,
        alteraCep,
        alteraEstado,
        alteraCidade,
        alteraBairro,
        alteraRua,
        alteraComplemento,
        alteraEndereco
    }: AlterarCliente) {

        if (alteraComplemento === "") {
            await prismaClient.client.update({
                where: {
                    id: id
                },
                data: {
                    nome: 'null',
                    senha: 'null',
                    idade: alteraIdade,
                    telefone: "null",
                    cep: alteraCep,
                    estado: alteraEstado,
                    cidade: alteraCidade,
                    bairro: alteraBairro,
                    rua: alteraRua,
                    complemento: "null",
                    endereco: alteraEndereco
                }
            })
        } else {
            await prismaClient.client.update({
                where: {
                    id: id
                },
                data: {
                    nome: alteraNome,
                    senha: alteraPassword,
                    idade: alteraIdade,
                    telefone: alteraTelefone,
                    cep: alteraCep,
                    estado: alteraEstado,
                    cidade: alteraCidade,
                    bairro: alteraBairro,
                    rua: alteraRua,
                    complemento: alteraComplemento,
                    endereco: alteraEndereco
                }
            })
            return { dados: 'Dados Alterados com sucesso!' }
        }
    }
}

export { AlterarClientesServices }