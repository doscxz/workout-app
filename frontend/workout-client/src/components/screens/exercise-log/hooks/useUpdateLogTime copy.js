import { useMutation, useQueryClient } from '@tanstack/react-query'
import ExerciseLogService from '../../../../srvices/exercise/exercise-log.service'
import { useParams } from 'react-router-dom'
import { useCompleteLog } from './useCompleteLog'

export const useUpdateLogTime = times => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { completeLog, errorCompleted } = useCompleteLog()

	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['update log time'],
		mutationFn: ({ timeId, body }) =>
			ExerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
			queryClient.invalidateQueries(['get exercise log', id])
			const filteredTimes = times.some(time => time.isCompleted)

			if (filteredTimes.length === times.length - 3) {
				completeLog({ isCompleted: true })
			}
		}
	})

	return {
		updateTime: mutate,
		error: errorChange || errorCompleted
	}
}
