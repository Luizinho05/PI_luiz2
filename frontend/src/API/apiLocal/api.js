import axios from 'axios'

const apiLocal = axios.create({
    baseURL: 'http://localhost:5555'
})

export default apiLocal