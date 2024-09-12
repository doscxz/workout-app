import { $axios } from '../api'

const USER = '/users'

class UserService {
	async getProfile() {
		return await $axios.get(`${USER}/profile`)
	}
}
export default new UserService()
