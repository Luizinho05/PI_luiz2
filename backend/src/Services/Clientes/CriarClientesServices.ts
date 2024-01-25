import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface CriarClientes {
  nome: string
  email: string
  password: string
  idade: string
  telefone: string
  cpf_cnpj: string
  rg_ie: string
  cep: string
  estado: string
  cidade: string
  bairro: string
  rua: string
  complemento: string
  endereco: string
}

class CriarClientesServices {
  async execute({
    nome, email , password, idade, telefone, cpf_cnpj, rg_ie, cep, estado, cidade, bairro, rua, complemento, endereco
  }: CriarClientes) {
    if (!nome || !email || !password || !idade || !telefone || !cpf_cnpj || !rg_ie || !cep || !estado ||
      !cidade || !bairro || !rua || !endereco) {
      throw new Error('Faltou um ou mais campos sem registro!')
    }

    const DocJaCadastrado = await prismaClient.client.findFirst({
      where: {
        OR: [
          {
            cpf_cnpj: cpf_cnpj
          },
          {
            rg_ie: rg_ie
          }
        ]
      }
    })

    if (DocJaCadastrado) {
      throw new Error('CPF/CNPJ ou RG/IE já registrado!')
    }

    const cadastradoJa = await prismaClient.client.findFirst({
      where: {
        email: email
      }
    })

    if (cadastradoJa) {
      throw new Error('Email já cadastrado!')
    }

    const senhaCrypt = await hash(password, 8)
    if (complemento === "") {
      await prismaClient.client.create({
        data: {
          nome: nome,
          email: email,
          senha: senhaCrypt,
          idade: idade,
          telefone: "null",
          cpf_cnpj: cpf_cnpj,
          rg_ie: rg_ie,
          cep: cep,
          estado: estado,
          cidade: cidade,
          bairro: bairro,
          rua: rua,
          complemento: "null",
          endereco: endereco
        }
      })
    } else {
      await prismaClient.client.create({
        data: {
          nome: nome,
          email: email,
          senha: senhaCrypt,
          idade: idade,
          telefone: telefone,
          cpf_cnpj: cpf_cnpj,
          rg_ie: rg_ie,
          cep: cep,
          estado: estado,
          cidade: cidade,
          bairro: bairro,
          rua: rua,
          complemento: complemento,
          endereco: endereco
        }
      })
    }

    return { dados: 'Cliente registrado com sucesso!' }
  }
}

export { CriarClientesServices }