import prismaClient from "../../prisma";

interface AlterarProduto {
	id: string
	alteraNome: string
	alteraMarca: string
	alteraTamanho: string
	alteraCategoria: string
	alteraQuantidade: string
	alteraPreco: string
	alteraTipo: string
	alteraImg: string
}

class AlterarProdutosServices {
	async execute({
		id,
		alteraNome,
		alteraMarca,
		alteraTamanho,
		alteraCategoria,
		alteraQuantidade,
		alteraPreco,
		alteraTipo,
		alteraImg
	}: AlterarProduto) {

		if (alteraNome === "" || alteraMarca === "" || alteraTamanho === "" ||
			alteraCategoria === "" || alteraQuantidade === "" || alteraTipo === "" || alteraImg === "") {
			await prismaClient.products.update({
				where: {
					id: id
				},
				data: {
					nome: "null",
					marca: "null",
					tamanho: "null",
					categoriaId: "null",
					quantidade: "null",
					preco: alteraPreco,
					tipo: "null",
					img: "null"
				}
			})
		} else {
			await prismaClient.products.update({
				where: {
					id: id
				},
				data: {
					nome: alteraNome,
					marca: alteraMarca,
					tamanho: alteraTamanho,
					categoriaId: alteraCategoria,
					quantidade: alteraQuantidade,
					preco: alteraPreco,
					tipo: alteraTipo,
					img: alteraImg
				}
			})
			return { dados: 'Produto Alterado com sucesso!' }
		}
	}
}

export { AlterarProdutosServices }