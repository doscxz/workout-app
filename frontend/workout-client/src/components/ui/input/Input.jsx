import styles from './Input.module.scss'
const Field = ({ error, placeholder = '' }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input className={styles.input} placeholder={placeholder} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Field
