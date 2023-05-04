import { createStackNavigator } from '@react-navigation/stack'
import ParaVoce from '../screen/ParaVoce'
import Seguindo from '../screen/Seguindo'

const { Screen, Navigator } = createStackNavigator()

export function CategoriasRoutes() {
	return (
		<Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
			<Screen name='ParaVoce' component={ParaVoce} />
			<Screen name="Seguindo" component={Seguindo} />
		</Navigator>
	)
}
