import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import env from '../../../env.json'
import { Entypo, MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons'
import { useKeyboard } from '@react-native-community/hooks'
import { Box, Center, Pressable, HStack } from 'native-base'

export function CustomTabBar({ state, descriptors, navigation }) {
	const { color } = env
	const { keyboardShown } = useKeyboard()

	if (keyboardShown) {
		return
	} else {
		return (
			<Box maxH={20} h={20} w={'100%'}>
				<HStack justifyContent={'space-evenly'} maxH={20} h={20} w={'100%'} bgColor={color.preto}>
					{state.routes.map((route, index) => {
						const { options } = descriptors[route.key]

						const isFocused = state.index === index

						const onPress = () => {
							const event = navigation.emit({
								type: 'tabPress',
								target: route.key,
								canPreventDefault: true,
							})

							if (!isFocused && !event.defaultPrevented) {
								navigation.navigate(route.name)
							}
						}

						const onLongPress = () => {
							navigation.emit({
								type: 'tabLongPress',
								target: route.key,
							})
							console.log('teste')
						}

						const icon = {
							home: {
								isFocused: <Ionicons color={color.branco} style={{ margin: 5 }} name="home-sharp" size={30} onPress={onPress} onLongPress={onLongPress} />,

								noFocused: <Ionicons color={color.branco} style={{ margin: 5 }} name="home-outline" size={30} onPress={onPress} onLongPress={onLongPress} />,
							},
							publish: {
								isFocused: <Ionicons color={color.branco} name="ios-add-circle-sharp" style={{ marginLeft: 4, marginRight: 1 }} size={50} onPress={onPress} onLongPress={onLongPress} />,

								noFocused: <Ionicons color={color.branco} name="ios-add-circle-outline" style={{ marginLeft: 4, marginRight: 1 }} size={55} onPress={onPress} onLongPress={onLongPress} />,
							},
							search: {
								isFocused: <Ionicons name="ios-compass" size={35} color={color.branco} style={{ marginHorizontal: 5, marginVertical: 4 }} onPress={onPress} />,

								noFocused: <Ionicons name="ios-compass-outline" size={35} color={color.branco} style={{ marginHorizontal: 5, marginVertical: 4 }} onPress={onPress} />,
							},
							notification: {
								isFocused: <Ionicons name="ios-notifications-sharp" size={30} color={color.branco} style={{ marginHorizontal: 5, marginVertical: 4 }} onPress={onPress} />,

								noFocused: <Ionicons name="ios-notifications-outline" size={30} color={color.branco} style={{ marginHorizontal: 5, marginVertical: 4 }} onPress={onPress} />,
							},
							user: {
								isFocused: <FontAwesome name="user" size={30} color={color.branco} style={{ marginHorizontal: 10, marginVertical: 4 }} onPress={onPress} />,

								noFocused: <FontAwesome name="user-o" size={30} color={color.branco} style={{ marginHorizontal: 10, marginVertical: 4 }} onPress={onPress} />,
							},
						}

						return (
							<Pressable key={route.key} alignItems={'center'} justifyContent={'center'} accessibilityRole="button" accessibilityState={isFocused ? { selected: true } : {}} accessibilityLabel={options.tabBarAccessibilityLabel} testID={options.tabBarTestID} onLongPress={onLongPress}>
								<Center flex={1}>{isFocused ? icon[options.tabBarIcon].isFocused : icon[options.tabBarIcon].noFocused}</Center>
							</Pressable>
						)
					})}
				</HStack>
			</Box>
		)
	}
}
