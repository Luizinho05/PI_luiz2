import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../../Context/authContext'
import { IoIosArrowBack } from "react-icons/io";
import apiLocal from '../../../../API/apiLocal/api'
import apiCep from '../../../../API/apiCep/api'
import './altera.scss'

export default function AlterarCliente() {
    const navigation = useNavigate()
    const { id } = useParams()
    const [ListarUnicoCliente, setListarUnicoCliente] = useState("")
    const [alteraNome, setAlteraNome] = useState("")
    const [alteraTelefone, setAlteraTelefone] = useState("")
    const [alteraIdade, setAlteraIdade] = useState("")
    const [alteraCep, setAlteraCep] = useState("")
    const [alteraEstado, setAlteraEstado] = useState("")
    const [alteraCidade, setAlteraCidade] = useState("")
    const [alteraBairro, setAlteraBairro] = useState("")
    const [alteraRua, setAlteraRua] = useState("")
    const [alteraComplemento, setAlteraComplemento] = useState("")
    const [alteraEndereco, setAlteraEndereco] = useState("")
    const iToken = localStorage.getItem("@vistaseToken")
    const token = JSON.parse(iToken)

    const [buscaCep, setBuscaCep] = useState("")

    async function handleCep() {
        if (alteraCep.length < 8 || alteraCep.length > 8) {
            toast.warn('CEP incorreto')
            return
        } else {
            const response = await apiCep.get(`${alteraCep}/json`)
            if (response.data.err === true) {
                toast.warn('CEP inexistente')
                return
            } else {
                setBuscaCep(response.data)
            }
        }
    }

    useEffect(() => {
        function addBuscaCep() {
            setAlteraEstado(buscaCep.uf || alteraEstado)
            setAlteraCidade(buscaCep.localidade || alteraCidade)
            setAlteraBairro(buscaCep.bairro || alteraBairro)
            setAlteraRua(buscaCep.logradouro || alteraRua)
        }
        addBuscaCep()
    }, [handleCep])

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

    useEffect(() => {
        async function listarClienteUnico() {
            const response = await apiLocal.get(`/ListarUnicoCliente/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if (response.data.dados) {
                navigation('/Login')
                return
            }
            setListarUnicoCliente(response.data)
        }
        listarClienteUnico()
    }, [id])

    useEffect(() => {
        setAlteraNome(ListarUnicoCliente.alteraNome)
        setAlteraIdade(ListarUnicoCliente.alteraIdade)
        setAlteraTelefone(ListarUnicoCliente.alteraTelefone)
        setAlteraCep(ListarUnicoCliente.alteraCep)
        setAlteraEstado(ListarUnicoCliente.alteraEstado)
        setAlteraCidade(ListarUnicoCliente.alteraCidade)
        setAlteraBairro(ListarUnicoCliente.alteraBairro)
        setAlteraRua(ListarUnicoCliente.alteraRua)
        setAlteraComplemento(ListarUnicoCliente.alteraComplemento)
        setAlteraEndereco(ListarUnicoCliente.alteraEndereco)
    }, [ListarUnicoCliente])

    async function AlterarCliente(e) {
        e.preventDefault()
        try {
            const iToken = localStorage.getItem("@vistaseToken")
            const token = JSON.parse(iToken)

            const response = await apiLocal.put("/AlterarCliente", {
                id,
                alteraNome,
                alteraIdade,
                alteraTelefone,
                alteraCep,
                alteraEstado,
                alteraCidade,
                alteraBairro,
                alteraRua,
                alteraComplemento,
                alteraEndereco
            }, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            toast.info(response.data.dados)
            navigation("/ListarCliente")
        } catch (err) {
            toast.error(err.response.data.error)
            return
        }
    }

    return (
        <div className='alignForm'>
            <div>
                <h1 className='texto'>Alteração de Cliente</h1>
            </div>
            <div className='formInicio'>
                <form onSubmit={AlterarCliente}>
                    <label>Insira Nome:</label>
                    <input
                        placeholder='insira o nome'
                        type='text'
                        value={alteraNome}
                        onChange={(e) => setAlteraNome(e.target.value)}
                    />
                    <label>Insira Idade:</label>
                    <input
                        placeholder='insira a idade'
                        type='text'
                        value={alteraIdade}
                        onChange={(e) => setAlteraIdade(e.target.value)}
                    />
                    <label>Insira o Telefone:</label>
                    <input
                        placeholder='novo Telefone'
                        type='text'
                        value={alteraTelefone}
                        onChange={(e) => setAlteraTelefone(e.target.value)}
                    />
                    <label>Insira CEP:</label>
                    <input
                        placeholder='novo CEP'
                        type='text'
                        value={alteraCep}
                        onBlur={handleCep}
                        onChange={(e) => setAlteraCep(e.target.value)}
                    />
                    <label>Insira Estado:</label>
                    <input
                        placeholder='novo Estado'
                        type='text'
                        value={alteraEstado}
                        onChange={(e) => setAlteraEstado(e.target.value)}
                    />
                    <label>Insira Cidade:</label>
                    <input
                        placeholder='Nova Cidade'
                        type='text'
                        value={alteraCidade}
                        onChange={(e) => setAlteraCidade(e.target.value)}
                    />
                    <label>Insira Bairro:</label>
                    <input
                        placeholder='Novo Bairro'
                        type='text'
                        value={alteraBairro}
                        onChange={(e) => setAlteraBairro(e.target.value)}
                    />
                    <label>Insira Rua:</label>
                    <input
                        placeholder='Nova Rua'
                        type='text'
                        value={alteraRua}
                        onChange={(e) => setAlteraRua(e.target.value)}
                    />
                    <label>Insira Complemento:</label>
                    <input
                        placeholder='Novo Complemento'
                        type='text'
                        value={alteraComplemento}
                        onChange={(e) => setAlteraComplemento(e.target.value)}
                    />
                    <label>Insira Endereço:</label>
                    <input
                        placeholder='Novo Endereço'
                        type='text'
                        value={alteraEndereco}
                        onChange={(e) => setAlteraEndereco(e.target.value)}
                    /><br />

                    <button type='submit'>Alterar</button>
                </form>
            </div>
            <Link to='/ListarCliente'><IoIosArrowBack size='1.4rem' color='blue' /></Link>
            <br /><br /><br /><br />
        </div>
    )
}
