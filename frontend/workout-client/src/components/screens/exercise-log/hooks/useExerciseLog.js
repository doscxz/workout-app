import { useQuery } from '@tanstack/react-query'
import ExerciseLogService from '../../../../srvices/exercise/exercise-log.service'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUpdateLogTime } from './useUpdateLogTime copy'

export const useExerciseLog = () => {
	const { id } = useParams()

	const [times, setTimes] = useState([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data
	})

	useEffect(() => {
		if (exerciseLog !== undefined) {
			setTimes(exerciseLog.times)
		} else if (exerciseLog === undefined) {
			null
		}
	}, [isSuccess])

	const { error, updateTime } = useUpdateLogTime(times)

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTime = timeId => {
		return times.find(time => time.id === timeId)
	}

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		return time ? time[key] : key === 'isCompleted' ? false : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		console.log(isCompleted)
		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: +time.reapet,
				weight: +time.weight
			}
		})
	}
	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		error,
		onChangeState,
		getState
	}
}
