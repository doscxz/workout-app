import Auth from '../components/screens/auth/Auth'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/newWorkout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import ListWorkouts from '../components/screens/worokout/list/ListWorkouts'
import Workout from '../components/screens/worokout/detail/Workout'
import ExerciseLog from '../components/screens/exercise-log/ExerciseLog'

const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercises',
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/workout/:id',
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true
	},
	{
		path: '/exercises/:id',
		component: ExerciseLog,
		isAuth: true
	}
]
export default routes
