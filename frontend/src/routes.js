import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import RoupaCasual from "./pages/Roupas/RoupaCasual"
import RoupaFormal from "./pages/Roupas/RoupaFormal"
import Contato from "./pages/contato"
import Login from "./pages/Login"
import Dashboard from "./pages/DashboardPages/dashboard"
import CriarUsuario from './pages/DashboardPages/Usuarios/CriarUsuarios'
import ListarUsuario from "./pages/DashboardPages/Usuarios/ListarUsuario"
import AlterarUsuario from "./pages/DashboardPages/Usuarios/AlterarUsuario"
import CriarCliente from "./pages/DashboardPages/Clientes/CriarClientes"
import ListarCliente from "./pages/DashboardPages/Clientes/ListarCliente"
import AlterarCliente from "./pages/DashboardPages/Clientes/AlterarCliente"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/RF" element={<RoupaFormal />} />
                <Route path="/RC" element={<RoupaCasual />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/CriarUsuario' element={<CriarUsuario />} />
                <Route path='/ListarUsuario' element={<ListarUsuario />} />
                <Route path='/AlteraUsuario/:id' element={<AlterarUsuario />} />
                <Route path="/CriarCliente" element={<CriarCliente />} />
                <Route path="/ListarCliente" element={<ListarCliente />} />
                <Route path="/AlteraCliente/:id" element={<AlterarCliente />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}
