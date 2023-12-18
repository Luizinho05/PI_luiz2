import React, { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../../../Context/authContext"
import apiLocal from "../../../../API/apiLocal/api"
import apiCep from "../../../../API/apiCep/api"
import { toast } from "react-toastify"
import { IoIosArrowBack } from "react-icons/io";
import "./Cliente.scss"

export default function CriarCliente() {
    const navigation = useNavigate()
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [cpf_cnpj, setCPF_CNPJ] = useState("")
    const [rg_ie, setRG_IE] = useState("")
    const [tel, setTel] = useState("")
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [complemento, setComplemento] = useState("")
    const [endereco, setEndereco] = useState("")

    const [buscaCep, setBuscaCep] = useState("")
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)
    const [criarCliente, setCriarCliente] = useState([''])

    useEffect(() => {
        async function loadClientes() {
            const response = await apiLocal.post('/CriarCliente', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(response.data.dados === !token){
                navigation('/Login')
                return
           } else if(token){
            navigation('/CriarCliente')
            return
           }
            setCriarCliente(response.data)
        }
        loadClientes()
    }, [criarCliente])

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

    async function handleCep() {
        if(cep.length < 8 || cep.length > 8){
            toast.warn('CEP incorreto')
            return
        } else {
            const response = await apiCep.get(`${cep}/json`)
            if (response.data.err === true){
                toast.warn('CEP inexistente')
                return
            } else{
                setBuscaCep(response.data)
            }
        }
    }

    useEffect(() => {
        function addBuscaCep() {
            setEstado(buscaCep.uf || estado)
            setCidade(buscaCep.localidade || cidade)
            setBairro(buscaCep.bairro || bairro)
            setRua(buscaCep.logradouro || rua)
        }
        addBuscaCep()
    }, [handleCep])

    async function handleCadastrar(e) {
        e.preventDefault()
        try {
            const iToken = localStorage.getItem('@vistaseToken')
            const token = JSON.parse(iToken)
        
            await apiLocal.post("/CriarCliente", {
                nome: nome,
                idade: idade,
                cpf_cnpj: cpf_cnpj,
                rg_ie: rg_ie,
                telefone: tel,
                cep: cep,
                estado: estado,
                cidade: cidade,
                bairro: bairro,
                rua: rua,
                complemento: complemento,
                endereco: endereco               
            }, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            toast.success("Cliente registrado com êxito.")
            navigation('/ListarCliente')
        } catch (err) {
            toast.error(err.response.data.error)
            return
        }
    }



    return (
        <div>
            <div>
                <h1 className="alignform">Cadastro de Cliente</h1>
            </div>

            <div className="formInicio">
                <form onSubmit={handleCadastrar}>

                    <label>Nome:</label>
                    <input
                        placeholder="Insira o Nome" type="text"
                        value={nome} onChange={(e) => setNome(e.target.value)}
                    />

                    <label>Idade:</label>
                    <input
                        placeholder="Insira a Idade" type='number'
                        value={idade} onChange={(e) => setIdade(e.target.value)}
                    />

                    <label>Telefone_Celular:</label>
                    <input
                        placeholder="(99) 99 99999-9999" type='text'
                        value={tel} onChange={(e) => setTel(e.target.value)}
                    />

                    <label>CPF ou CNPJ:</label>
                    <input
                        placeholder="Insira o CPF ou o CNPJ" type="text"
                        value={cpf_cnpj} onChange={(e) => setCPF_CNPJ(e.target.value)}
                    />

                    <label>RG ou IE:</label>
                    <input
                        placeholder="Insira o RG ou IE" type="text"
                        value={rg_ie} onChange={(e) => setRG_IE(e.target.value)}
                    />

                    <label>Endereço:</label>
                    <input
                        placeholder="Insira o número da moradia" type="text"
                        value={endereco} onChange={(e) => setEndereco(e.target.value)}
                    />

                    <label>Complemento:</label>
                    <input
                        placeholder="Opcional" type="text"
                        value={complemento} onChange={(e) => setComplemento(e.target.value)}
                    />

                    <label>CEP:</label>
                    <input
                        placeholder="Insira o CEP" type='text'
                        value={cep} onBlur={handleCep} onChange={(e) => setCep(e.target.value)}
                    />

                    <label>Estado:</label>
                    <input
                        placeholder="Insira o Estado" type="text"
                        value={estado} onChange={(e) => setEstado(e.target.value)}
                    />

                    <label>Cidade:</label>
                    <input
                        placeholder="Insira a Cidade" type="text"
                        value={cidade} onChange={(e) => setCidade(e.target.value)}
                    />

                    <label>Bairro:</label>
                    <input
                        placeholder="Insira o Bairro" type="text"
                        value={bairro} onChange={(e) => setBairro(e.target.value)}
                    />

                    <label>Rua:</label>
                    <input
                        placeholder="Insira o Rua" type="text"
                        value={rua} onChange={(e) => setRua(e.target.value)}
                    />

                    <br />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <Link to='/Dashboard'><IoIosArrowBack size='1.4rem' color='blue'/></Link>
            <br/><br/><br/><br/>
        </div>
    )
}