import Layout from '../../layout/Layout'
import { Controller } from 'react-hook-form'
import Field from '../../ui/field/Field'
import Loader from '../../ui/Loader'
import cn from 'clsx'
import styles from './NewExercise.module.scss'
import Button from '../../ui/button/Button'
import Alert from '../../ui/alert/Alert'
import { getImagePath } from './iamge-path.utils'
import { newExercisesPage } from './newExercisesPage'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
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
	} = newExercisesPage()

	return (
		<>
			<Layout
				bgImage='../../../../public/images/bg-exercises.jpg'
				heading='Create new exercise'
				backLink='/new-workout'
			/>

			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>
					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'times is required'
						}}
						placeholder='Enter times'
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getImagePath(name)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getImagePath(name)
										})}
										onClick={() => onChange(getImagePath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					{error?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
