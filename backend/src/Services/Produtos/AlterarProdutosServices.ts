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
	}: AlterarProduto){
       
		await prismaClient.products.update({
			where: {
				id: id
			},
			data:{
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

export { AlterarProdutosServices }