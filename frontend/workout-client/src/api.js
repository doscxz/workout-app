import Cookies from 'js-cookie'
import axios from 'axios'
import { TOKEN } from './app.constans'

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})
