import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Contato from "./pages/contato"
import Login from "./pages/Login"
import Dashboard from "./pages/DashboardPages/dashboard"
import CriarUsuario from './pages/DashboardPages/Usuarios/CriarUsuarios'
import ListarUsuario from "./pages/DashboardPages/Usuarios/ListarUsuario"
import AlterarUsuario from "./pages/DashboardPages/Usuarios/AlterarUsuario"
import CriarCliente from "./pages/DashboardPages/Clientes/CriarClientes"
import ListarCliente from "./pages/DashboardPages/Clientes/ListarCliente"
import AlterarCliente from "./pages/DashboardPages/Clientes/AlterarCliente"
import CriarProduto from './pages/DashboardPages/Produtos/CriarProdutos'
import ListarProduto from './pages/DashboardPages/Produtos/ListarProdutos'
import AlterarProduto from './pages/DashboardPages/Produtos/AlterarProdutos'
import CriarCategoria from "./pages/DashboardPages/Categoria/CriarCategoria"
import ListarCategoria from './pages/DashboardPages/Categoria/ListarCategoria'
import AlterarCategoria from './pages/DashboardPages/Categoria/AlterarCategoria'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/CriarUsuario' element={<CriarUsuario />} />
                <Route path='/ListarUsuario' element={<ListarUsuario />} />
                <Route path='/AlteraUsuario/:id' element={<AlterarUsuario />} />
                <Route path="/CriarCliente" element={<CriarCliente />} />
                <Route path="/ListarCliente" element={<ListarCliente />} />
                <Route path="/AlteraCliente/:id" element={<AlterarCliente />} />
                <Route path="/CriarProduto" element={<CriarProduto/>} />
                <Route path='/ListarProduto' element={<ListarProduto/>} />
                <Route path='/AlteraProduto/:id' element={<AlterarProduto/>} />
                <Route path='/CriarCategoria' element={<CriarCategoria/>} />
                <Route path='/ListarCategoria' element={<ListarCategoria/>} />
                <Route path='/AlteraCategoria/:id' element={<AlterarCategoria/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}
