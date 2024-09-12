import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../../srvices/auth.service'

export const useAuthPage = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	const { mutate, isLoading } = useMutation({
		mutationFn: ({ email, password }) => {
			AuthService.main(email, password, type)
		},
		onSuccess: () => {
			setIsAuth(true)
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}

	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}
