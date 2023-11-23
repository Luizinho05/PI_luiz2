import { AuthContext } from "../../../../Context/authContext";
import { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom";
import apiLocal from "../../../../API/apiLocal/api"
import { toast } from "react-toastify";
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import "./listarCliente.css"

export default function ListarCliente() {
    const navigation = useNavigate()
    const [clientes, setClientes] = useState([""])
    const lsToken = localStorage.getItem("@vistaseToken")
    const token = JSON.parse(lsToken)


    useEffect(() => {
        const lsToken = localStorage.getItem('@vistaseToken')
        const token = JSON.parse(lsToken)
        if (!token) {
            navigation('/Login')
            return
        }
        loginVerify()
    }, [])

    const { loginVerify } = useContext(AuthContext)

    useEffect(() => {
        async function loadClientes() {
            const response = await apiLocal.get("/ListarCliente", {
                headers: {
                    Authorization: "Bearer " + `${token}`
                }
            })
            setClientes(response.data)
        }
        loadClientes()
    }, [clientes]);

    async function excluirCliente(id) {
        const response = await apiLocal.delete("/DeletarCliente", {
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
        <div>
            <h1 className="TituloPagina">Informações de Clientes</h1>

            {clientes.map((item) => {
                return (
                    <a key={item.id}>
                        <div className="Info">
                            <a>{item.nome}</a>
                            <a>{item.idade}</a>
                        </div>
                        <div className="Info">
                            <a>{item.cpf_cnpj}</a>
                            <a className="Divisor">|</a>
                            <a>{item.rg_ie}</a>
                        </div>
                        <div className="Info">
                            <a>{item.cep}</a>
                        </div>
                        <div className="Info">
                            <a>{item.rua}</a>
                        </div>
                        <div className="Info">
                            <a>{item.complemento}</a>
                            <a>|</a>
                            <a>{item.endereco}</a>
                        </div>
                        <h3 className='icones'>
                            <Link to ={`/AlteraCliente/${item.id}`}><FaPencilAlt size='1.4rem' color='blue'/></Link>
                        </h3>
                        <h3 className='icones'>
                            <FaTrashAlt size='1.4rem' color='red' onClick={() => excluirCliente(item.id)}/>
                        </h3>
                        <br /> <br />
                    </a>
                )
            })}
        </div>
    )
}