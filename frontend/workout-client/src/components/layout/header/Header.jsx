import { useLocation, useNavigate } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ backLink = '/' }) => {
	/* TODO: React router useHistory*/

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	if (!isAuth) return null

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname !== '/' ? (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							{<FiArrowLeft fontSize={20} />}
						</button>
					) : (
						<button
							onClick={() => {
								navigate('/profile')
							}}
						>
							<FaUserAlt fontSize={20} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
