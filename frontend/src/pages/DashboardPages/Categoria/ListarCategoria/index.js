import { AuthContext } from "../../../../Context/authContext";
import { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom";
import apiLocal from "../../../../API/apiLocal/api"
import { toast } from "react-toastify";
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import './selectCategoria.scss'

export default function ListarCategoria(){
    const navigation = useNavigate()
    const [categorias, setCategorias] = useState([''])
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect(() => {
        async function loadCategoria(){
            const response = await apiLocal.get('/ListarCategorias', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(response.data.dados){
                navigation('/Login')
                return
            }
            setCategorias(response.data)
        }
        loadCategoria()
    }, [categorias])

    const { loginVerify } = useContext(AuthContext)

    useEffect(() => {
        const iToken = localStorage.getItem('@vistaseToken')
        const token = JSON.parse(iToken)
        if (!token){
            navigation('/Login')
            return
        }
        loginVerify()
    }, [])

    async function excluirCategoria(id){
        const response = await apiLocal.delete('/ExcluirCategoria', {
            headers: {
                Authorization: 'Bearer ' + `${token}`
            },
            data: {
                excluir: id
            }
        })
        toast.info(response.data.dados)
    }

    return(
        <div>
            <h1 className="TituloPagina">Informações da Categoria</h1>
        
        
        {categorias.map((item) => {

            return(
              <article key={item.id}>
              <strong className="Info linhaDivision">_____________________________</strong><br/>
              <div className="Info">
              <p className="p">{item.nome}</p>
              <p className="p">{item.id}</p>
              <h3 className="icones">
                <Link to={`/AlteraCategoria/${item.id}`}><FaPencilAlt size='1.4rem' color='blue'/></Link>
              </h3>
              <h3 className="icones">
                <FaTrashAlt size='1.4rem' color='red' onClick={() => excluirCategoria(item.id)}/>
              </h3>
              </div>
              </article>
            )
        })}
        <br/><br/><br/><br/>
      </div>
    )
}