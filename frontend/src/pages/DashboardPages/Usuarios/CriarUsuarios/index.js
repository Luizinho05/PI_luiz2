import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../../Context/authContext'
import { IoIosArrowBack } from "react-icons/io";
import apiLocal from '../../../../API/apiLocal/api'
import './insert.scss'

export default function CriarUsuario(){
    const navigation = useNavigate()
    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    const [criarUsuario, setCriarUsuario] = useState([''])

    useEffect(() => {
        async function loadUsuarios() {
            const response = await apiLocal.post('/CriarUsuario', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(response.data.dados === !token){
                navigation('/Login')
                return
           } else if(token){
            navigation('/CriarUsuario')
            return
           }
            setCriarUsuario(response.data)
        }
        loadUsuarios()
    }, [criarUsuario])

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

    async function handleCadastrar(e){
        e.preventDefault()
        try{
           if (!nome || !email || !password){
            toast.warn('Campos em branco não são permitidos!')
            return
           }
           const iToken = localStorage.getItem('@vistaseToken')
           const token = JSON.parse(iToken)

           await apiLocal.post('/CriarUsuario', {
             nome: nome,
             email: email,
             password: password
           }, {
            headers: {
              Authorization: 'Bearer ' + `${token}`
            }
           })
           toast.success('Usuário cadastrado com sucesso!')
           navigation('/ListarUsuario')
        } catch (err){
           toast.error(err.response.data.error)
           return
        }
    }

    return(
        <div>
          <div>
             <h1 className='alignform'>Cadastro de Usuário</h1>
          </div>
          <div className='formInicio'>
            <form onSubmit={handleCadastrar}>
              <label>Nome:</label>
              <input placeholder='Insira o Nome'
              type='text'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              />
              <label>Email:</label>
              <input placeholder='Insira o E-mail'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <label>Senha:</label>
              <input placeholder='Insira a Senha'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit'>Cadastrar</button>
            </form>
          </div>
          <Link to='/Dashboard'><IoIosArrowBack size='1.4rem' color='blue'/></Link>
          <br/><br/><br/><br/>
        </div>
    )
}