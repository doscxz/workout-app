import { useProfile } from './useProfile'
import styles from './Profile.module.scss'
import stylesLayout from '../../layout/Layout.module.scss'
import cn from 'clsx'
import Header from '../../layout/header/Header'
import Loader from '../../ui/Loader'
import Statistics from './statistics/statistics'

const Profile = () => {
	const { data, isLoading } = useProfile()
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.shadow)}
				style={{
					backgroundImage: `url('/public/images/profile.jpg')`,
					height: 356
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='../../../../public/images/userProfile.jpg'
								alt='Profile'
								height='80'
								width='80'
								draggable={false}
								style={{ borderRadius: 100 }}
							/>
							{<h1 className={stylesLayout.heading}>{data?.name}</h1>}
						</>
					)}
				</div>
				<Statistics />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img
								src={image}
								alt=''
								draggable={false}
								width={250}
								style={{
									borderRadius: 20
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Profile
