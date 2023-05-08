import { createStackNavigator } from '@react-navigation/stack'

import Imagem from '../screen/Imagem'
import Video from '../screen/Video'
import VideoVertical from '../screen/VideoVertical'
import Audio from '../screen/Audio'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
	return (
		<Navigator initialRouteName="Audio" screenOptions={{
			headerShown: false 
		}}>
			<Screen name="Imagem" component={Imagem} />
			<Screen name="Video" component={Video} />
			<Screen name="VideoVertical" component={VideoVertical} />
			<Screen name="Audio" component={Audio} />
		</Navigator>
	)
}
