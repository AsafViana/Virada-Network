import { createStackNavigator } from '@react-navigation/stack'
import { CategoriasRoutes } from './categorias.routes'
const { Screen, Navigator } = createStackNavigator()

export function RoutesRoutes() {

	return (
		<Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
			<Screen name='Categorias' component={CategoriasRoutes} />
		</Navigator>
	)
}
