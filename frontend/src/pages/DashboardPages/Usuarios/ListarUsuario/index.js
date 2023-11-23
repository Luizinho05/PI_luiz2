import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../../Context/authContext'
import apiLocal from '../../../../API/apiLocal/api'
import './listarUsuario.css'

export default function ListarUsuario(){
 const navigation = useNavigate()
 const [usuario, setUsuario] = useState([''])
 const iToken = localStorage.getItem('@vistaseToken')
 const token = JSON.parse(iToken)

    useEffect (() => {
        async function loadUsuarios(){
            const resposta = await apiLocal.get('/ListarUsuarios', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(resposta.data.dados){
                navigation('/Login')
                return
            }
            setUsuario(resposta.data)
        }
        loadUsuarios()
    }, [usuario])

    const { loginVerify } = useContext(AuthContext)
   
    useEffect(() => {
        const iToken = localStorage.getItem('@vistaseToken')
        const token = JSON.parse(iToken)
        if(!token){
            navigation('/Login')
            return
        }
        loginVerify()
    },[])

    async function excluirUsuario(id){
        const resposta = await apiLocal.delete('/DeletarUsuario', {
            headers: {
                Authorization: 'Bearer ' + `${token}`
            },
            data:{
                usuarioId: id
            }
        })
        toast.info(resposta.data.dados)
    }

return(
    
    <div>
        <h1 className='TituloPagina'>Informações de Usuários</h1>
        
                {usuario.map((item) => {

                    return(

                        <article key={item.id}>
                    <strong className='Info linhaDivision'>______________________________</strong><br/>
                    <div className='Info'>
                        <p className='p'>{item.nome}</p>
                        <p className='p'>{item.email}</p>
                        <h3 className='icones'>
                            <Link to ={`/AlteraUsuario/${item.id}`}><FaPencilAlt size='1.4rem' color='blue'/></Link>
                        </h3>
                        <h3 className='icones'>
                            <FaTrashAlt size='1.4rem' color='red' onClick={() => excluirUsuario(item.id)}/>
                        </h3>
                    </div>
                </article>
                    )
                })}
                <br/><br/><br/><br/>
                </div>
             )

}