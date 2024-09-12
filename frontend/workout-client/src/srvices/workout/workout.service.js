import { $axios } from '../../api'

export const WORKOUT = '/workouts'
class WorkoutService {
	async getAll() {
		return await $axios.get(WORKOUT)
	}
	async getById(id) {
		return await $axios.get(`${WORKOUT}/${id}`)
	}
	// name, exercisesIds []
	async create(body) {
		return await $axios.post(WORKOUT, body)
	}
	async update(id, body) {
		return await $axios.put(`${WORKOUT}/${id}`, body)
	}

	async delete(id) {
		return await $axios.delete(`${WORKOUT}/${id}`)
	}
}
export default new WorkoutService()
