import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CustomTabBar } from '../component/TabBar'
import Home from '../screen/Home'

const { Navigator, Screen } = createBottomTabNavigator()

export function LogadoRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarActiveTintColor: '#212121',

				tabBarStyle: {
					borderTopWidth: 0,
					backgroundColor: '#fff',
				},
			}}
			tabBar={(props) => <CustomTabBar {...props} />}
			initialRouteName="Home">
			<Screen name="Home" component={Home} options={{ tabBarHideOnKeyboard: true, tabBarIcon: 'home' }} />
			<Screen name="Home2" component={Home} options={{ tabBarHideOnKeyboard: true, tabBarIcon: 'search' }} />
			<Screen name="Home3" component={Home} options={{ tabBarHideOnKeyboard: true, tabBarIcon: 'publish' }} />
			<Screen name="Home4" component={Home} options={{ tabBarHideOnKeyboard: true, tabBarIcon: 'notification' }} />
			<Screen name="Home5" component={Home} options={{ tabBarHideOnKeyboard: true, tabBarIcon: 'user' }} />
		</Navigator>
	)
}
