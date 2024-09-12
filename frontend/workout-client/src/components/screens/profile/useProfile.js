import UserServices from '../../../srvices/user.services'
import { useQuery } from '@tanstack/react-query'
export const useProfile = () => {
	return useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserServices.getProfile(),
		select: ({ data }) => data
	})
}
