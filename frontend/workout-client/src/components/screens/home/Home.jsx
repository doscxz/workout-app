import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import Statistics from '../profile/statistics/statistics'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/backgroundImg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FROM THE SHOULDERS</h1>
			{/* TODO: Counters */}
			<Statistics />
		</Layout>
	)
}

export default Home
