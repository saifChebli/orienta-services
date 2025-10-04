import axios from 'axios'

const api = axios.create({
    baseURL: 'https://admin.oriventa-pro-service.com',
    withCredentials : true
})

export default api