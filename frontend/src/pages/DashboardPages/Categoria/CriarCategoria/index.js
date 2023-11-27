import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../../Context/authContext'
import { toast } from 'react-toastify'
import apiLocal from '../../../../API/apiLocal/api'
import './insertCategoria.scss'

export default function CriarCategoria(){
    const navigation = useNavigate()
    const [nome, setNome] = useState('')
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)
    const [criarCategoria, setCriarCategoria] = useState([''])

    useEffect(() => {
        async function loadCategoria() {
            const response = await apiLocal.post('/CriarCategorias', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(response.data.dados){
                navigation('/Login')
                return
            }
            setCriarCategoria(response.data)
        }
        loadCategoria()
    }, [criarCategoria])

    const { loginVerify } = useContext(AuthContext)

    useEffect(() => {
          const iToken = localStorage.getItem('@vistaseToken')
          const token = JSON.parse(iToken)

          if(!token){
            navigation('/Login')
            return
          }
          loginVerify()
    }, [])

    async function handleCriarCategoria(e){
        e.preventDefault()
        try{
           if(!nome){
            toast.warn('O campo nome é necessário para a criação da Categoria!')
            return
           }
           const iToken = localStorage.getItem('@vistaseToken')
           const token = JSON.parse(iToken)
           await apiLocal.post('/CriarCategorias', {
             nome: nome
           }, {
              headers:{
                Authorization: 'Bearer ' + `${token}`
              }
           })
           toast.success('Categoria registrada com sucesso!')
        }catch(err){
          toast.error(err.response.data.error)
          return
        }
    }

    return(
        <div className='container-fluid alignform'>
            <div>
                <h1>Registro de Categoria</h1>
            </div>
            <div className='formInicio'>
                <form onSubmit={handleCriarCategoria}>
                 <label>Nome:</label>
                 <input placeholder='insira o nome'
                 type='text'
                 value={nome}
                 onChange={(e) => setNome(e.target.value)}
                 />
                 <button type='submit'>Registrar</button>
                </form>
            </div>
            <br/><br/><br/><br/>
        </div>
    )
}