import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import ExerciseService from '../../../srvices/exercise/exercise.service'
import { useMemo, useState } from 'react'

export const newExercisesPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})
	const { isSuccess, error, isLoading, mutate } = useMutation({
		mutationKey: ['create exercises'],
		mutationFn: body => ExerciseService.create(body),
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(() => ({
		register,
		handleSubmit,
		errors,
		reset,
		control,
		isSuccess,
		error,
		isLoading,
		mutate,
		onSubmit
	}))
}
