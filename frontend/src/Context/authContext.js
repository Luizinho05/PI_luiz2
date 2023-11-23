import { createContext, useState } from "react"
import { toast } from "react-toastify"
import apiLocal from "../API/apiLocal/api"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [ user, setUser ] = useState('')
    
    const isAuth = !!user

    const iToken = localStorage.getItem("@vistaseToken")
    const token = JSON.parse(iToken)
    console.log("AuthContext", token)
    console.log("AuthContext", user)

    async function loginVerify() {
        try {
            const response = await apiLocal.get('/ListarUsuarioToken', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            setUser(response.data.id)
        } catch (err) {
            if(err.response.status === 401){
                setUser('')
            }
        }
    }

    async function signIn({ email, password }) {
        try {
            const response = await apiLocal.post("/LoginUsuario", {
                email,
                password
            })
            return response
        } catch (err) {
            return(err.data.dados)
        }
    }

    return (
        <AuthContext.Provider value={{ loginVerify, signIn, isAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

//na hora de chamar ela em alguma página, ela deve ser chamada assim

// ->Página de Login<-
//import {authContext} from "rota do context"
//import {useNavigate} from "react-router-dom"
//import {useContext} from "react"
//
//const navigation = useNavigation()
//const [email, setEmail] = useState("")
//const [password, setPassword] = useState("")
//const {signIn} = useContext(authContext)
//
//async function handleLogin(e) {
//  e.preventDefault(e)
//  
//  try {
//      let data = {
//        email,
//        password
//      }
//
//    const response = await signIn(data)
//    const token = response.data.token
//    localStorage.setItem("@vistaseToken", JSON.stringify(token))
//    navigation("/Dashboard")
//   } catch (err) {
//    toast.error("Email ou senha incorretos!")
//    return
//  }
//}




// ->Demais páginas<-
//import {authContext} from "rota do context"
//import {useNavigate} from "react-router-dom"
//import {useContext} from "react"
//
//const navigation = useNavigate()
//const {loginToken} = useContext(authContext)
//useEffect(() => {
//    const lsToken = localStorage.getItem("@vistaseToken")
//    const token = JSON.parse(lsToken)
//
//    if(!token) {
//        navigation("/")
//        return
//    }
//
//    loginToken()
//}, [])