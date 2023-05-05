import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screen/Home'
import { LogadoRoutes } from './logado.routes'
const { Screen, Navigator } = createStackNavigator()

export function RoutesRoutes() {
	return (
		<Navigator initialRouteName='Logado' screenOptions={{ headerShown: false }}>
			<Screen name='Home' component={Home}/>
			<Screen name='Logado' component={LogadoRoutes}/>
		</Navigator>
	)
}
