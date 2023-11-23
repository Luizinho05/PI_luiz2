import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../../Context/authContext'
import apiLocal from '../../../../API/apiLocal/api'
import './altera.scss'

export default function AlterarCliente() {
    const navigation = useNavigate()
    const { id } = useParams()
    const [ListarUnicoCliente, setListarUnicoCliente] = useState("")
    const [alteraNome, setAlteraNome] = useState("")
    const [alteraIdade, setAlteraIdade] = useState("")
    const [alteraCep, setAlteraCep] = useState("")
    const [alteraEstado, setAlteraEstado] = useState("")
    const [alteraCidade, setAlteraCidade] = useState("")
    const [alteraBairro, setAlteraBairro] = useState("")
    const [alteraRua, setAlteraRua] = useState("")
    const [alteraComplemento, setAlteraComplemento] = useState("")
    const [alteraEndereco, setAlteraEndereco] = useState("")
    const lsToken = localStorage.getItem("@vistaseToken")
    const token = JSON.parse(lsToken)

    useEffect(() => {
        const iToken = localStorage.getItem('@vistaseToken')
        const token = JSON.parse(iToken)
        if (!token) {
            navigation('/Login')
            return
        }
        loginVerify()
    }, [])
    const { loginVerify } = useContext(AuthContext)

    useEffect(() => {
        async function listarClienteUnico() {
            const response = await apiLocal.get(`/ListarUnicoCliente/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            setListarUnicoCliente(response.data)
        }
        listarClienteUnico()
    }, [id]);

    useEffect(() => {
        setAlteraNome(ListarUnicoCliente.alteraNome)
        setAlteraIdade(ListarUnicoCliente.alteraIdade)
        setAlteraCep(ListarUnicoCliente.alteraCep)
        setAlteraEstado(ListarUnicoCliente.alteraEstado)
        setAlteraCidade(ListarUnicoCliente.alteraCidade)
        setAlteraBairro(ListarUnicoCliente.alteraBairro)
        setAlteraRua(ListarUnicoCliente.alteraRua)
        setAlteraComplemento(ListarUnicoCliente.alteraComplemento)
        setAlteraEndereco(ListarUnicoCliente.alteraEndereco)
    }, [ListarUnicoCliente]);

    async function AlterarCliente(e) {
        e.preventDefault()
        const response = await apiLocal.put("/AlterarCliente", {
            headers: {
                Authorization: 'Bearer ' + `${token}`
            }
        },
            {
                id,
                alteraNome,
                alteraIdade,
                alteraCep,
                alteraEstado,
                alteraCidade,
                alteraBairro,
                alteraRua,
                alteraComplemento,
                alteraEndereco
            })
        toast.info(response.data.dados)
        navigation("/ListarCliente")
    }

    return (
        <div className='alignForm'>
            <div>
                <h1>Alteração de Cliente</h1>
            </div>
            <div className='formInicio'>
                <form onSubmit={AlterarCliente}>
                    <label>Insira Nome</label>
                    <input type='text' value={alteraNome} onChange={(e) => { setAlteraNome(e.target.value) }} />
                    <label>Insira Idade</label>
                    <input type='text' value={alteraIdade} onChange={(e) => { setAlteraIdade(e.target.value) }} />
                    <label>Insira CEP</label>
                    <input type='text' value={alteraCep} onChange={(e) => { setAlteraCep(e.target.value) }} />
                    <label>Insira Estado</label>
                    <input type='text' value={alteraEstado} onChange={(e) => { setAlteraEstado(e.target.value) }} />
                    <label>Insira Cidade</label>
                    <input type='text' value={alteraCidade} onChange={(e) => { setAlteraCidade(e.target.value) }} />
                    <label>Insira Bairro</label>
                    <input type='text' value={alteraBairro} onChange={(e) => { setAlteraBairro(e.target.value) }} />
                    <label>Insira Rua</label>
                    <input type='text' value={alteraRua} onChange={(e) => { setAlteraRua(e.target.value) }} />
                    <label>Insira Complemento</label>
                    <input type='text' value={alteraComplemento} onChange={(e) => { setAlteraComplemento(e.target.value) }} />
                    <label>Insira Endereço</label>
                    <input type='text' value={alteraEndereco} onChange={(e) => { setAlteraEndereco(e.target.value) }} />
                </form>
            </div>
        </div>
    )
}
