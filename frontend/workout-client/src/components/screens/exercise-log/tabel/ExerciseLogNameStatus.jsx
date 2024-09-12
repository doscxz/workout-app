import styles from '../ExerciseLog.module.scss'

const ExerciseLogNameStatus = () => {
	const nameStatus = ['Previous', 'Weight & Repeat', 'Completed']

	return (
		<div className={styles.row}>
			{nameStatus.map(status => (
				<div key={status}>
					<span>{status}</span>
				</div>
			))}
		</div>
	)
}
export default ExerciseLogNameStatus
