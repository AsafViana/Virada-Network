import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, Box } from 'native-base'
import { Routes } from './src/routes'
import { LogBox } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { color } from './env.json'

export default function App() {
	LogBox.ignoreAllLogs()
	return (
		<SafeAreaProvider style={{ backgroundColor: color.preto }}>
			<SafeAreaView style={{ flex: 1 }}>
				<NativeBaseProvider>
					<StatusBar style="light" />
					<Routes />
				</NativeBaseProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
