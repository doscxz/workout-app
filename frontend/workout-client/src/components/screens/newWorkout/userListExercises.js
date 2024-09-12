import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../../../srvices/exercise/exercise.service'

export const newUserListExercises = () =>
	useQuery({
		queryKey: ['list exercises'],
		queryFn: () => ExerciseService.getAll(),
		select: ({ data }) => data
	})
