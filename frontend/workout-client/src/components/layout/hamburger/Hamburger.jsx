import styles from './Hamburger.module.scss'
import { FiAlignRight } from 'react-icons/fi'
import { GoX } from 'react-icons/go'
import Menu from './Menu'
import { onClickOutside } from '../../../hooks/useOutside'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = onClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <GoX color='white' /> : <FiAlignRight color='white' />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}
export default Hamburger
