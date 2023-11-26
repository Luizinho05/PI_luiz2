import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../../Context/authContext'
import apiLocal from '../../../../API/apiLocal/api'
import './AlterarProduto.scss'

export default function AlterarProduto(){
    const navigation = useNavigate()
    const { id } = useParams()
    const [listarUnicoProduto, setListarUnicoProduto] = useState('')
    const [categoria, setCategoria] = useState([''])
    const [alteraNome, setAlteraNome] = useState('')
    const [alteraMarca, setAlteraMarca] = useState('')
    const [alteraTipo, setAlteraTipo] = useState('')
    const [alteraTamanho, setAlteraTamanho] = useState('')
    const [alteraQuantidade, setAlteraQuantidade] = useState('')
    const [alteraPreco, setAlteraPreco] = useState('')
    const [alteraCategoria, setAlteraCategoria] = useState('')
    const [alteraImg, setAlteraImg] = useState(null)
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect (() => {
        async function loadingCategorias(){
            const resposta = await apiLocal.get('/ListarCategorias', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            setCategoria(resposta.data)
        }
        loadingCategorias()
    }, [categoria])

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
        async function listarProdutoUnico() {
            const response = await apiLocal.get(`/ListarUnicoProduto/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(response.data.dados){
                navigation('/Login')
                return
            }
            setListarUnicoProduto(response.data)
        }
        listarProdutoUnico()
    }, [id])

    useEffect(() => {
        setAlteraNome(listarUnicoProduto.alteraNome)
        setAlteraMarca(listarUnicoProduto.alteraMarca)
        setAlteraTipo(listarUnicoProduto.alteraTipo)
        setAlteraTamanho(listarUnicoProduto.alteraTamanho)
        setAlteraQuantidade(listarUnicoProduto.alteraQuantidade)
        setAlteraPreco(listarUnicoProduto.alteraPreco)
        setAlteraCategoria(listarUnicoProduto.alteraCategoria)
        setAlteraImg(listarUnicoProduto.alteraImg)
    }, [listarUnicoProduto])

    function handleImagem(e){
        if (!e.target.files){
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg'){
            setAlteraImg(image)
        }
       }

    async function AlterarProduto(e) {
        e.preventDefault()
        try{
            const iToken = localStorage.getItem("@vistaseToken")
            const token = JSON.parse(iToken)
        
            const response = await apiLocal.put("/AlterarProduto", {
                id,
                alteraNome,
				alteraMarca,
				alteraTamanho,
				alteraCategoria,
				alteraQuantidade,
				alteraPreco,
			    alteraTipo,
				alteraImg
            }, {
                headers: {
                  Authorization: 'Bearer ' + `${token}`
                }
            })
            toast.info(response.data.dados)
            navigation("/ListarProduto")
        }catch(err){
           toast.error(err.response.data.error)
           return
        }
    }

    return(
        <div>
        <div className='conteinerProduto'>
           <h1>Alteração de Produto</h1>
        </div>
        <div className='formProduto'>
           
           <form onSubmit={AlterarProduto}>
            <select
            value={alteraCategoria}
            onChange={(e) => setAlteraCategoria(e.target.value)}>
                <option>Selecione..</option>
                {categoria.map((item) => {
                    return(
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
            type='text'
            value={alteraNome}
            onChange={(e) => setAlteraNome(e.target.value)} 
            />
            <label>Marca:</label>
            <select
            value={alteraMarca}
            onChange={(e) =>setAlteraMarca(e.target.value)}>
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
                <option>Off-White</option>
                <option>Mizuno</option>
                <option>Hering</option>
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
            type='text'
            value={alteraTipo}
            onChange={(e) => setAlteraTipo(e.target.value)}
            />
            <label>Tamanho:</label>
            <select
            value={alteraTamanho}
            onChange={(e) => setAlteraTamanho(e.target.value)}>
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
            type='number'
            value={alteraQuantidade}
            onChange={(e) => setAlteraQuantidade(e.target.value)}
            />
            <label>Preço:</label>
            <input
            type='text'
            value={alteraPreco}
            onChange={(e) => setAlteraPreco(e.target.value)}
            />
            <label>Imagem:</label>
            <input
            type='file'
            accept='image/jpeg, image/png, image/jpg'
            onChange={handleImagem}
            />
            
            <button type='submit'>Alterar</button>
           </form>
        </div>
        <br/><br/><br/><br/>
    </div>
    )
}