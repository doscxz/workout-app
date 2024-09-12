import { createContext, useState } from 'react'
import Cookies from 'js-cookie'
import { TOKEN } from '../app.constans'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}
