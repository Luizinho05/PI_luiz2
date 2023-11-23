import axios from "axios"

const apiCep = axios.create({
    baseURL: "https://viacep.com.br/ws",
    Headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
})

export default apiCep