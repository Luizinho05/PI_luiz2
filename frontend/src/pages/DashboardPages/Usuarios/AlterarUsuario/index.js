import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../../Context/authContext'
import { IoIosArrowBack } from "react-icons/io";
import apiLocal from '../../../../API/apiLocal/api'
import './altera.scss'

export default function AlterarUsuario(){
    const navigation = useNavigate()
    const { id } = useParams()
    const [listarUnicoUsuario, setListarUnicoUsuario] = useState('')
    const [alteraNome, setAlteraNome] = useState('')
    const [alteraEmail, setAlteraEmail] = useState('')
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect(() => {
        async function listarUsuarioUnico(){
            const resposta = await apiLocal.get(`/ListarUnicoUsuario/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(resposta.data.dados){
                navigation('/Login')
                return
            }
            setListarUnicoUsuario(resposta.data)
        }
        listarUsuarioUnico()
    }, [id])

    useEffect(() => {
        setAlteraNome(listarUnicoUsuario.alteraNome)
        setAlteraEmail(listarUnicoUsuario.alteraEmail)
    }, [listarUnicoUsuario])

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

    async function AlterarUsuario(e){
        e.preventDefault()
        const resposta = await apiLocal.put('/AlterarUsuario', {
         id,
         alteraEmail,
         alteraNome
        })
        toast.info(resposta.data.dados)
        navigation('/ListarUsuario')
    }

    return(
        <div>
            <div>
                <h1 className='alignform'>Alteração de Usuário</h1>
            </div>
            <div className='formInicio'>
                <form onSubmit={AlterarUsuario}>
                <label>Nome:</label>
                <input placeholder='Insira o Novo Nome'
                type='text'
                value={alteraNome}
                onChange={(e) => setAlteraNome(e.target.value)}
                /><br/>
                <label>E-mail:</label>
                <input placeholder='Insira o Novo E-mail'
                type='email'
                value={alteraEmail}
                onChange={(e) => setAlteraEmail(e.target.value)}
                /><br/>

                <button type='submit'>Alterar</button>
                </form>
            </div>
            <Link to='/ListarUsuario'><IoIosArrowBack size='1.4rem' color='blue'/></Link>
            <br/>
        </div>
    )
}