import { createContext, useState } from "react"
import { toast } from "react-toastify"
import apiLocal from "../API/apiLocal/api"

export const AuthContexto = createContext()

export default function AuthProvider({ children }) {
    const [ client, setClient ] = useState('')
    
    const isAuth = !!client

    const iToken = localStorage.getItem("@vistaseToken")
    const token = JSON.parse(iToken)

    async function loginVerifY() {
        try {
            const response = await apiLocal.get('/ListarClienteToken', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            setClient(response.data.id)
        } catch (err) {
            if(err.response.status === 401){
                setClient('')
            }
        }
    }

    async function signLogin({ email, password }) {
        try {
            const response = await apiLocal.post("/LoginCliente", {
                email,
                password
            })
            return response
        } catch (err) {
            return(err.data.dados)
        }
    }

    return (
        <AuthContexto.Provider value={{ loginVerifY, signLogin, isAuth }}>
            {children}
        </AuthContexto.Provider>
    )
}