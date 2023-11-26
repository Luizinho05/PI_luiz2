import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../../../Context/authContext'
import { useNavigate, Link } from 'react-router-dom'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import apiLocal from '../../../../API/apiLocal/api'
import './listarProduto.css'

export default function ListarProduto(){
    const navigation = useNavigate()
    const [produtos, setProdutos] = useState([''])
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect(() => {
        async function loadingProdutos(){
            const resposta = await apiLocal.get('/ListarProduto', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(resposta.data.dados){
                navigation('/Login')
                return
            }
            setProdutos(resposta.data)
        }
        loadingProdutos()
    }, [produtos])

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

    async function excluirProduto(id){
        const resposta = await apiLocal.delete('/DeletarProduto',{
            headers: {
                Authorization: 'Bearer ' + `${token}`
            },
            data:{
                deletar: id
            }
        })
        toast.info(resposta.data.dados)
    }

    return(
        <div className='conteinerListarProduto'>
            <h1 className='h1'>Informações dos Produtos</h1>
            <div className='Dados'>
                <table className='tabela'>
                    <thead className='thread'>
                        <tr>
                            <th className='valoresDefinidos'>ID</th>
                            <th className='valoresDefinidos'>Nome</th>
                            <th className='valoresDefinidos'>Marca</th>
                            <th className='valoresDefinidos'>Tipo</th>
                            <th className='valoresDefinidos'>Tamanho</th>
                            <th className='valoresDefinidos'>Quantidade</th>
                            <th className='valoresDefinidos'>Foto</th>
                            <th className='valoresDefinidos'>Preço</th>
                            <th className='valoresDefinidos'>Alterar</th>
                            <th className='valoresDefinidos'>Excluir</th>
                            <th className='valoresDefinidos'>Categoria ID</th>
                        </tr>
                        {produtos.map((item) => {
                            return(
                                <tr key={item.id}>
                                    <td className='textoTabela'>{item.id}</td>
                                    <td className='textoTabela'>{item.nome}</td>
                                    <td className='textoTabela'>{item.marca}</td>
                                    <td className='textoTabela'>{item.tipo}</td>
                                    <td className='textoTabela'>{item.tamanho}</td>
                                    <td className='textoTabela'>{item.quantidade}</td>
                                    <td className='textoTabela'><img className='image' src={`http://localhost:5555/files/${item.img}`} alt=""/></td>
                                    <td className='textoTabela'>{item.preco}</td>
                                    <td className='textoTabela Icons'>
                                        <Link to={`/AlteraProduto/${item.id}`}><FaPencilAlt size='1.4rem' color='black'/></Link>
                                    </td>
                                    <td className='textoTabela Icons'>
                                        <FaTrashAlt size='1.4rem' color='red' onClick={() => excluirProduto(item.id)}/>
                                    </td>
                                    <td className='textoTabela'>{item.categoriaId}</td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>
            </div>
            <Link to='/Dashboard'>Voltar</Link>
        </div>
    )
}