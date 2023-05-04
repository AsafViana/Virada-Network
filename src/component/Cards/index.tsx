import { Box, Center, HStack, Text, IconButton, Icon, Pressable } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import { useFonts, Montserrat_900Black } from '@expo-google-fonts/montserrat'
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'

export default function index(props) {
	const {tipo} = props
	let [fontsLoaded] = useFonts({
		Montserrat_900Black,
		Inter_400Regular,
		Inter_600SemiBold
	})
	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<Center maxH={600}>
				<HStack space={2} p={3} minW={'100%'}>
					<Center backgroundColor={color.cinza} rounded={'full'} size={10}>
					<FontAwesome name="user" size={28} color={color.branco} />
					</Center>
					<Text fontSize={'md'} fontFamily={'Inter_600SemiBold'} alignSelf={'center'} color={color.branco}>Nome do usuário</Text>
				</HStack>
				<Center backgroundColor={color.cinzaEscuro} minH={'60%'} minW={'100%'}>
					<Text fontFamily="Montserrat_900Black" fontSize={'4xl'} color={color.branco}>
						{tipo}
					</Text>
				</Center>
				<Box px={3} pt={3} pb={1} minW={'100%'}>
					<HStack space={3} minW={'100%'}>
						<Pressable>
							<FontAwesome name="heart-o" color={color.branco} size={30} />
						</Pressable>
						<Pressable>
							<Ionicons name="chatbubble-outline" color={color.branco} size={30} />
						</Pressable>
						<Pressable>
							<Ionicons name="ios-paper-plane-outline" color={color.branco} size={30} />
						</Pressable>

						<Box flex={1} alignItems={'flex-end'}>
							<Pressable>
								<Ionicons name="md-bookmark-outline" color={color.branco} size={30} />
							</Pressable>
						</Box>
					</HStack>
				</Box>
				<Box px={3} minW={'100%'}>
					<Text fontFamily="Montserrat_900Black" color={color.branco}>
						Titulo da postagem
					</Text>
					<Text fontFamily={'Inter_400Regular'} pt={1} color={color.branco}>
						Lorem ea pariatur commodo consectetur id eiusmod esse aliqua. Sit amet eiusmod reprehenderit voluptate anim eiusmod eu.
					</Text>
				</Box>
			</Center>
		)
	}
}
