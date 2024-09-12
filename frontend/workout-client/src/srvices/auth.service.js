import { $axios } from '../api'
import Cookies from 'js-cookie'
import { TOKEN } from '../app.constans'

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})
			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}
export default new AuthService()
