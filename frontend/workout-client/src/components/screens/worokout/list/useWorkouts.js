import { useMutation, useQuery } from '@tanstack/react-query'
import WorkoutLogService from '../../../../srvices/workout/workout-log.service'
import { useNavigate } from 'react-router-dom'
import WorkoutService from '../../../../srvices/workout/workout.service'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery({
		queryKey: ['get workouts'],
		queryFn: () => WorkoutService.getAll(),
		select: data => data.data
	})

	const navigate = useNavigate()
	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation({
		mutationKey: ['Create new workout log'],
		mutationFn: workoutId => WorkoutLogService.create(workoutId),
		onSuccess({ data }) {
			navigate(`/workout/${data.id}`)
		}
	})

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
