import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../../Context/authContext"
import apiLocal from "../../../../API/apiLocal/api"
import apiCep from "../../../../API/apiCep/api"
import { toast } from "react-toastify"
import "./insert.scss"

export default function CriarCliente() {
    const navigation = useNavigate()

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

    async function handleCep() {
        const response = await apiCep.get(`/${cep}/json/`)
        setBuscaCep(response.data)
    }

    useEffect(() => {
        function addBuscaCep() {
            setEstado(buscaCep.uf)
            setCidade(buscaCep.localidade)
            setBairro(buscaCep.bairro)
            setRua(buscaCep.logradouro)
        }
        addBuscaCep()
    }, [handleCep]);

    async function handleCadastrar(e) {
        e.preventDefault()
        try {
            const iToken = localStorage.getItem('@vistaseToken')
            const token = JSON.parse(iToken)
           // console.log(token)
            await apiLocal.post("/CriarCliente", {
                nome: nome,
                idade: idade,
                cpf_cnpj: cpf_cnpj,
                rg_ie: rg_ie,
                tel: tel,
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
        } catch (err) {
            toast.error(err.response.data.error)
            return
        }
    }



    return (
        <div className="container-fluid alignform">
            <div>
                <h1>Cadastro de Cliente</h1>
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
                        placeholder="Insira a Idade" type="int"
                        value={idade} onChange={(e) => setIdade(e.target.value)}
                    />

                    <label>Telefone_Celular:</label>
                    <input
                        placeholder="Insira um número telefonico" type="int"
                        value={tel} onChange={(e) => setTel(e.target.value)}
                    />

                    <label>cpf ou cnpj:</label>
                    <input
                        placeholder="Insira o cpf ou o cnpj" type="text"
                        value={cpf_cnpj} onChange={(e) => setCPF_CNPJ(e.target.value)}
                    />

                    <label>RG ou IE:</label>
                    <input
                        placeholder="Insira o RG ou IE" type="text"
                        value={rg_ie} onChange={(e) => setRG_IE(e.target.value)}
                    />

                    <label>número:</label>
                    <input
                        placeholder="Insira o número da moradia" type="text"
                        value={endereco} onChange={(e) => setEndereco(e.target.value)}
                    />

                    <label>complemento:</label>
                    <input
                        placeholder="Opcional" type="text"
                        value={complemento} onChange={(e) => setComplemento(e.target.value)}
                    />

                    <label>cep:</label>
                    <input
                        placeholder="Insira o CEP" type="text"
                        value={cep} onBlur={handleCep} onChange={(e) => setCep(e.target.value)}
                    />

                    <label>estado:</label>
                    <input
                        placeholder="Insira o Estado" type="text"
                        value={estado} onChange={(e) => setEstado(e.target.value)}
                    />

                    <label>cidade:</label>
                    <input
                        placeholder="Insira a Cidade" type="text"
                        value={cidade} onChange={(e) => setCidade(e.target.value)}
                    />

                    <label>bairro:</label>
                    <input
                        placeholder="Insira o Nome" type="text"
                        value={bairro} onChange={(e) => setBairro(e.target.value)}
                    />

                    <label>rua:</label>
                    <input
                        placeholder="Insira o Nome" type="text"
                        value={rua} onChange={(e) => setRua(e.target.value)}
                    />

                    <br /> <br />

                    <button type="submit">Cadastrar</button>

                    <br /> <br />
                </form>
            </div>
        </div>
    )
}