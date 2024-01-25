import React, { useState, useEffect, useContext } from 'react'
import { AuthContexto } from '../../Context/ContextAuto'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiLocal from '../../API/apiLocal/api'

export default function LoginCliente() {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const  { signLogin }  = useContext(AuthContexto)

    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect(() => {
        if (!token) {
            navigation('/LoginCliente')
            return
        } else if (token) {
            async function verificaToken() {
                const resposta = await apiLocal.get('/ListarClienteToken', {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })
                if (resposta.data.dados) {
                    navigation('/LoginCliente')
                    return
                } else if (resposta.data.id) {
                    navigation('/dashboardCliente')
                }
            }
            verificaToken()
        }
    }, [])

    async function handleLoginCliente(e) {
        e.preventDefault(e)
        if (!email || !password) {
            toast.warn('um ou mais campos em branco!')
            return
        }
        try {
            let data = {
                email,
                password
            }
            const resposta = await signLogin(data)
            if (!resposta) {
                toast.error('Erro de Login!', {
                    toastId: 'toastId'
                })
               return
            } else if (resposta.status === 200) {
                const token = resposta.data.token
                localStorage.setItem('@vistaseToken', JSON.stringify(token))
                toast.success('Login efetuado com sucesso')
                navigation('/dashboardCliente')
            }
        } catch (err) {
            toast.error('Email ou senha incorretos!')
            return
        }
    }


    return (
        <div className='container-fluid alignform'>
            <div>
               <h1>Login Cliente</h1>
            </div>
            <div className='formInicio'>
                <form onSubmit={handleLoginCliente}>

                    <label>E-mail:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Senha:</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit'>Enviar</button>
                </form>
                <br /><br /><br /><br />
            </div>
        </div>
    )
}