import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'

const NewWorkout = () => {
	return (
		<>
			<Layout
				heading='CREATE NEW WORKOUT'
				bgImage='../../../../public/images/newWorkout.jpg'
			/>
			<div className='wrapper-inner-page'>
				<Input placeholder='name' />
				<Input placeholder='exercise' />
				<Button children='Create' />
			</div>
		</>
	)
}

export default NewWorkout
