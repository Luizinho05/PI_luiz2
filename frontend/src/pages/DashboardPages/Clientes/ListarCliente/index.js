import { AuthContext } from "../../../../Context/authContext";
import { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom";
import apiLocal from "../../../../API/apiLocal/api"
import { toast } from "react-toastify";
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
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
            if(response.data.dados){
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
 
        <div>
            <h1 className='TituloPagina'>Informações de Clientes</h1>
 
            {clientes.map((item) => {
 
                return (
 
                    <article key={item.id}>
                    <strong className='Info linhaDivision'>_____________________________</strong><br/>
                    <div className='Info'>
                        <p className='p'>{item.nome}</p>
                        <p className='p'>{item.idade}</p>
                        <p className='p'>{item.cep}</p>
                        <h3 className='icones'>
                            <Link to ={`/AlteraCliente/${item.id}`}><FaPencilAlt size='1.4rem' color='blue'/></Link>
                        </h3>
                        <h3 className='icones'>
                            <FaTrashAlt size='1.4rem' color='red' onClick={() => excluirCliente(item.id)}/>
                        </h3>
                    </div>
                </article>
                )
            })}
            <br/><br/><br/><br/>
        </div>
    )
}