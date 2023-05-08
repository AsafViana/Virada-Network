import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screen/Home'
import { LogadoRoutes } from './logado.routes'
import { StackRoutes } from './stack.routes'
const { Screen, Navigator } = createStackNavigator()

export function RoutesRoutes() {
	return (
		<Navigator initialRouteName='Stack' screenOptions={{ headerShown: false }}>
			<Screen name='Home' component={Home}/>
			<Screen name='Logado' component={LogadoRoutes}/>
			<Screen name='Stack' component={StackRoutes}/>
		</Navigator>
	)
}
