import { Router } from "express"
import multer from 'multer'
import uploadConfig from './config/multer'


//Criar
import { CriarUsuarioController } from "./Controllers/Usuario/CriarUsuarioController"
import { CriarClientesController } from "./Controllers/Clientes/CriarClientesController"
import { CriarProdutosController } from "./Controllers/Produtos/CriarProdutosController"
import { CriarCategoriasController } from "./Controllers/Categorias/CriarCategoriasController"

//Listar
import { ListarUsuarioController } from "./Controllers/Usuario/ListarUsuarioController"
import { ListarClientesController } from "./Controllers/Clientes/ListarClientesController"
import { ListarProdutosController } from "./Controllers/Produtos/ListarProdutosController"
import { ListarCategoriasController } from "./Controllers/Categorias/ListarCategoriasController"

//ListarUnico
import { ListarUnicoUsuarioController } from "./Controllers/Usuario/ListarUnicoUsuarioController"
import { ListarClienteUnicoController } from "./Controllers/Clientes/ListarClienteUnicoController"
import { ListarProdutoUnicoController } from "./Controllers/Produtos/ListarProdutoUnicoController"
import { ListarCategoriaUnicaController } from "./Controllers/Categorias/ListarCategoriaUnicaController"

//Deletar
import { DeletarUsuarioController } from "./Controllers/Usuario/DeletarUsuarioController"
import { DeletarClientesController } from "./Controllers/Clientes/DeletarClientesController"
import { ApagarProdutosController } from "./Controllers/Produtos/ApagarProdutosController"
import { ExcluirCategoriaController } from "./Controllers/Categorias/excluirCategoriaController"

//Alterar
import { AlterarUsuarioController } from "./Controllers/Usuario/AlterarUsuarioController"
import { AlterarClientesController } from "./Controllers/Clientes/AlterarClientesController"
import { AlterarProdutoController } from "./Controllers/Produtos/AlterarProdutosController"
import { AlterarCategoriaController } from "./Controllers/Categorias/AlterarCategoriaController"

//Login
import { LoginUsuarioController } from "./Controllers/Usuario/LoginUsuarioController"
import { ListarUsuarioTokenController } from "./Controllers/Usuario/ListarUsuarioTokenController"

import { autenticado } from "./middleware/authToken"
const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//Usuário

router.post("/CriarUsuario", autenticado, new CriarUsuarioController().handle)
router.post("/LoginUsuario", new LoginUsuarioController().handle)
router.get("/ListarUsuarios", autenticado, new ListarUsuarioController().handle)
router.get("/ListarUnicoUsuario/:id", autenticado, new ListarUnicoUsuarioController().handle)
router.delete("/DeletarUsuario", autenticado, new DeletarUsuarioController().handle)
router.put("/AlterarUsuario",  new AlterarUsuarioController().handle)

//Cliente

router.post('/CriarCliente', autenticado, new CriarClientesController().handle )
router.get('/ListarCliente', autenticado,  new ListarClientesController().handle)
router.get('/ListarUnicoCliente/:id', autenticado, new ListarClienteUnicoController().handle)
router.put('/AlterarCliente', autenticado,  new AlterarClientesController().handle)
router.delete('/DeletarCliente', autenticado, new DeletarClientesController().handle)

//Produto

router.post('/CriarProduto', autenticado , upload.single('file'), new CriarProdutosController().handle)
router.get('/ListarProduto', autenticado, new ListarProdutosController().handle)
router.get('/ListarUnicoProduto/:id', autenticado, upload.single('file'), new ListarProdutoUnicoController().handle)
router.put('/AlterarProduto', autenticado, new AlterarProdutoController().handle)
router.delete('/DeletarProduto', autenticado, new ApagarProdutosController().handle)

//Categorias

router.post('/CriarCategorias', autenticado, new CriarCategoriasController().handle)
router.get('/ListarCategorias', autenticado, new ListarCategoriasController().handle)
router.get('/ListarUnicaCategoria/:id', autenticado, new ListarCategoriaUnicaController().handle)
router.put('/AlterarCategoria', autenticado, new AlterarCategoriaController().handle)
router.delete('/ExcluirCategoria', autenticado, new ExcluirCategoriaController().handle)

//Login
router.get('/ListarUsuarioToken', autenticado, new ListarUsuarioTokenController().handle)

export { router }