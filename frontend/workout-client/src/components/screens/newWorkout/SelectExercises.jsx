import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { newUserListExercises } from './userListExercises'
import Loader from '../../ui/Loader'

const SelectExercises = ({ control }) => {
	const { data, isLoading } = newUserListExercises()

	if (isLoading) return <Loader />
	return (
		<Controller
			name='exercisesIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<Select
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					title='Exercises'
					options={data.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
					value={value}
					onChange={onChange}
					isMulti
				/>
			)}
		/>
	)
}

export default SelectExercises
