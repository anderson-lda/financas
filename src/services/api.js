import axios from "axios";


const api = axios.create({
    //baseURL: 'http://localhost:3333'
    baseURL: 'http://192.168.100.103:3333' //pode mudar a cada sessão do host
})

export default api