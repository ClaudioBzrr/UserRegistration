import Axios from 'axios'

export const api = Axios.create({
    baseURL:String(import.meta.env.VITE_API_URL)
})