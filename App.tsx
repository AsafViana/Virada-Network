import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, Box } from 'native-base'
import { Routes } from './src/routes'
import { LogBox } from 'react-native'

export default function App() {
	LogBox.ignoreAllLogs()
	return (
		<NativeBaseProvider>
			<StatusBar style="light" />
			<Routes />
		</NativeBaseProvider>
	)
}
