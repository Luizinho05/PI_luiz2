import { AuthContext } from "../../../../Context/authContext";
import { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom";
import apiLocal from "../../../../API/apiLocal/api"
import { toast } from "react-toastify";
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { IoIosArrowBack } from "react-icons/io";
import './listarCliente.css'

export default function ListarCliente() {
    const navigation = useNavigate()
    const [clientes, setClientes] = useState([''])
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect(() => {
        async function loadClientes() {
            const response = await apiLocal.get('/ListarCliente', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if (response.data.dados) {
                navigation('/Login')
                return
            }
            setClientes(response.data)
        }
        loadClientes()
    }, [clientes])

    const { loginVerify } = useContext(AuthContext)

    useEffect(() => {
        const iToken = localStorage.getItem('@vistaseToken')
        const token = JSON.parse(iToken)
        if (!token) {
            navigation('/Login')
            return
        }
        loginVerify()
    }, [])

    async function excluirCliente(id) {
        const response = await apiLocal.delete('/DeletarCliente', {
            headers: {
                Authorization: 'Bearer ' + `${token}`
            },
            data: {
                apagar: id
            }
        })
        toast.info(response.data.dados)
    }


    return (
        <div className="conteinerListarCliente">
            <h1 className="textoh1">Informações dos Clientes</h1>
            <div className="Dados1">
                <table className="Tabela">
                    <thead className="Thread">
                        <tr>
                            <th className="ValoresDefinidos">ID</th>
                            <th className="ValoresDefinidos">Nome</th>
                            <th className="ValoresDefinidos">idade</th>
                            <th className="ValoresDefinidos">Telefone</th>
                            <th className="ValoresDefinidos">CPF/CNPJ</th>
                            <th className="ValoresDefinidos">RG/IE</th>
                            <th className="ValoresDefinidos">CEP</th>
                            <th className="ValoresDefinidos">Estado</th>
                            <th className="ValoresDefinidos">Cidade</th>
                            <th className="ValoresDefinidos">Bairro</th>
                            <th className="ValoresDefinidos">Rua</th>
                            <th className="ValoresDefinidos">Complemento</th>
                            <th className="ValoresDefinidos">Endereço</th>
                            <th className="ValoresDefinidos">Alterar</th>
                            <th className="ValoresDefinidos">Excluir</th>
                        </tr>
                        {clientes.map((item) => {
                            return (
                            <tr key={item.id}>
                                <td className="TextoTabela">{item.id}</td>
                                <td className="TextoTabela">{item.nome}</td>
                                <td className="TextoTabela">{item.idade}</td>
                                <td className="TextoTabela">{item.telefone}</td>
                                <td className="TextoTabela">{item.cpf_cnpj}</td>
                                <td className="TextoTabela">{item.rg_ie}</td>
                                <td className="TextoTabela">{item.cep}</td>
                                <td className="TextoTabela">{item.estado}</td>
                                <td className="TextoTabela">{item.cidade}</td>
                                <td className="TextoTabela">{item.bairro}</td>
                                <td className="TextoTabela">{item.rua}</td>
                                <td className="TextoTabela">{item.complemento}</td>
                                <td className="TextoTabela">{item.endereco}</td>
                                <td className="TextoTabela Icons">
                                    <Link to={`/AlteraCliente/${item.id}`}><FaPencilAlt size='1.4rem' color='black'/></Link>
                                </td>
                                <td className="TextoTabela Icons">
                                    <FaTrashAlt size='1.4rem' color='red' onClick={() => excluirCliente(item.id)} />
                                </td>
                            </tr>
                        )
                        })}
                    </thead>
                </table>
            </div>
            <Link to='/Dashboard'><IoIosArrowBack size='1.4rem' color='blue' /></Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}