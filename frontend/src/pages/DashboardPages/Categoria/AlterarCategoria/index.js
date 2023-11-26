import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../../Context/authContext'
import apiLocal from '../../../../API/apiLocal/api'
import './alteraCategoria.scss'

export default function AlterarCategoria(){
const navigation = useNavigate()
const { id } = useParams()
const [listarUnicaCategoria, setListarUnicaCategoria] = useState('')
const [alteraNome, setAlteraNome] = useState('')
const iToken = localStorage.getItem('@vistaseToken')
const token = JSON.parse(iToken)

const { loginVerify } = useContext(AuthContext)

useEffect(() => {
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)
    if(!token){
        navigation('/Login')
        return
    }
    loginVerify()
}, {})

useEffect(() => {
    async function listarCategoriaUnica(){
        const response = await apiLocal.get(`/ListarUnicaCategoria/${id}`,{
            headers: {
                Authorization: 'Bearer ' + `${token}`
            }
        })
        if(response.data.dados){
            navigation('/Login')
            return
        }
        setListarUnicaCategoria(response.data)
    }
    listarCategoriaUnica()
}, [id])
   
   useEffect(() => {
        setAlteraNome(listarUnicaCategoria.alteraNome)
   }, [listarUnicaCategoria])

   async function AlterarCategoria(e){
    e.preventDefault()
    try{
      const iToken = localStorage.getItem('@vistaseToken')
      const token = JSON.parse(iToken)

      const response = await apiLocal.put('/AlterarCategoria', {
        id,
        alteraNome
      }, {
        headers: {
            Authorization: 'Bearer ' + `${token}`
        }
      })
      toast.info(response.data.dados)
      navigation('/ListarCategoria')
    }catch(err){
        toast.error(err.response.data.error)
        return
    }
}

    return(
        <div className='alignForm'>
            <div>
                <h1 className='texto'>Alteração de categoria</h1>
            </div>
            <div className='formInicio'>
              <form onSubmit={AlterarCategoria}>
                <label>Nome:</label>
                <input
                type='text'
                value={alteraNome}
                onChange={(e) => setAlteraNome(e.target.value)}
                /><br/>

                <button type='submit'>Alterar</button>
              </form>
            </div>
            <br/><br/><br/><br/>
        </div>
    )
}