import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../../Context/authContext'
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import apiLocal from '../../../../API/apiLocal/api'
import './CriarProduto.scss'

export default function CriarProduto() {
    const navigation = useNavigate()
    const [categorias, setCategorias] = useState([''])
    const [nome, setNome] = useState('')
    const [marca, setMarca] = useState('')
    const [tipo, setTipo] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')
    const [categoriaId, setCategoriaId] = useState('')
    const [imagem, setImagem] = useState(null)

    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect(() => {
        async function loadingCategorias() {
            const resposta = await apiLocal.get('/ListarCategorias', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if (resposta.data.dados) {
                navigation('/Login')
                return
            }
            setCategorias(resposta.data)
        }
        loadingCategorias()
    }, [categorias])

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

    function handleImagem(e) {
        if (!e.target.files) {
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            setImagem(image)
        }
    }

    async function CadastrarProduto(e) {
        try {
            e.preventDefault()
            const idCategoria = categoriaId
            const data = new FormData()

            data.append('nome', nome)
            data.append('marca', marca)
            data.append('tipo', tipo)
            data.append('tamanho', tamanho)
            data.append('quantidade', quantidade)
            data.append('preco', preco)
            data.append('categoriaId', idCategoria)
            data.append('file', imagem)

            const resposta = await apiLocal.post('/CriarProduto', data, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            toast.success(resposta.data.dados)
            navigation('/ListarProduto')

        } catch (err) {
            toast.error('Token Inválido!')
            return
        }
        setNome('')
        setMarca('')
        setTipo('')
        setTamanho('')
        setQuantidade('')
        setPreco('')
        setImagem(null)
    }

    return (
        <div>
            <div className='conteinerProduto'>
                <h1>Cadastro de Produto</h1>
            </div>
            <div className='formProduto'>

                <form onSubmit={CadastrarProduto}>
                    <select
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(e.target.value)}>
                        <option>Selecione..</option>
                        {categorias.map((item) => {
                            return (
                                <option
                                    value={item.id}
                                    key={item.id}>
                                    {item.nome}
                                </option>
                            )
                        })}
                    </select>
                    <label>Nome:</label>
                    <input
                        placeholder='Nome do Produto'
                        type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label>Marca:</label>
                    <select
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}>
                        <option>Selecione a marca..</option>
                        <option>Nike</option>
                        <option>H&M</option>
                        <option>Zara</option>
                        <option>Louis Vuitton</option>
                        <option>Adidas</option>
                        <option>Uniqlo</option>
                        <option>Gucci</option>
                        <option>Balenciaga</option>
                        <option>Prada</option>
                        <option>Valentino</option>
                        <option>Moncler</option>
                        <option>Mizuno</option>
                        <option>Dry</option>
                        <option>Fila</option>
                        <option>Puma</option>
                        <option>Olympikus</option>
                        <option>Paris</option>
                        <option>Under Armour</option>
                        <option>Umbro</option>
                        <option>Oakley</option>
                    </select>
                    <label>Tipo:</label>
                    <input
                        placeholder='tipo do Produto'
                        type='text'
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                    <label>Tamanho:</label>
                    <select
                        value={tamanho}
                        onChange={(e) => setTamanho(e.target.value)}>
                        <option>Selecione o tamanho..</option>
                        <option>PP</option>
                        <option>P</option>
                        <option>M</option>
                        <option>G</option>
                        <option>GG</option>
                        <option>XG</option>
                        <option>XGG</option>
                        <option>EG</option>
                        <option>EGG</option>
                        <option>PLUS</option>
                    </select>
                    <label>Quantidade:</label>
                    <input
                        placeholder='Quantidade no estoque'
                        type='number'
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                    <label>Preço:</label>
                    <input
                        placeholder='insira o Preço'
                        type='text'
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                    <label>Imagem:</label>
                    <input
                        type='file'
                        accept='image/jpeg, image/png, image/jpg'
                        onChange={handleImagem}
                    />

                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
            <Link to='/Dashboard'><IoIosArrowBack size='1.4rem' color='blue' /></Link>
            <br /><br /><br /><br />
        </div>
    )
}