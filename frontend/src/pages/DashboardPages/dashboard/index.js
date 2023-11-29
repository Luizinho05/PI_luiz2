import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsBoxArrowLeft } from "react-icons/bs";
import apiLocal from '../../../API/apiLocal/api'
import './dashboard.scss'

export default function Dashboard() {
    const navigation = useNavigate()
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect(() => {
        if (!token) {
            navigation('/Login')
            return
        } else if (token) {
            async function verificaToken() {
                const resposta = await apiLocal.get('/ListarUsuarioToken', {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })
                if (resposta.data.dados) {
                    navigation('/Login')
                    return
                } else if (resposta.data.id) {
                    navigation('/Dashboard')
                }
            }
            verificaToken()
        }
    }, [token])

    function handleSair() {
        localStorage.removeItem("@vistaseToken")
        navigation("/Login")
    }
    
    return (
        <div className='body'>
            <div className='textoDashboard'>
                <h1 className='nomeDash'>Dashboard</h1>
                <button className='sair' onClick={handleSair}><BsBoxArrowLeft size='1.7rem' color='white' /></button>
            </div>
            <div className='dashboard'>
                <div>
                    <button><Link to='/CriarUsuario'>Criar Usuário</Link></button>
                </div>
                <div>
                    <button><Link to='/CriarCliente'>Criar Cliente</Link></button>
                </div>
                <div>
                    <button><Link to='/CriarProduto'>Criar Produto</Link></button>
                </div>
                <div>
                    <button><Link to='/CriarCategoria'>Criar Categoria</Link></button>
                </div>
                <div>
                    <button><Link to='/ListarUsuario'>Listar Usuário</Link></button>
                </div>
                <div>
                    <button><Link to="/ListarCliente">Listar Cliente</Link></button>
                </div>
                <div>
                    <button><Link to='/ListarProduto'>Listar Produto</Link></button>
                </div>
                <div>
                    <button><Link to='/ListarCategoria'>Listar Categoria</Link></button>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}