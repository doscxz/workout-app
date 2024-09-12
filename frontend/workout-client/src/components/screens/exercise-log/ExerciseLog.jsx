import HeaderExerciseLog from './HeaderExercisesLog'
import Loader from '../../ui/Loader'
import styles from './ExerciseLog.module.scss'
import ExerciseLogNameStatus from './tabel/ExerciseLogNameStatus'
import Alert from '../../ui/alert/Alert'
import { useExerciseLog } from './hooks/useExerciseLog'
import TableRow from './tabel/TabelRow'
import { useUpdateLogTime } from './hooks/useUpdateLogTime copy'
import { useCompleteLog } from './hooks/useCompleteLog'
import ExerciseError from './ExerciseError'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isSuccess,
		isLoading,
		error,
		getState,
		onChangeState,
		toggleTime
	} = useExerciseLog()

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<ExerciseLogNameStatus />
						{exerciseLog?.times.map(item => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}
				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
