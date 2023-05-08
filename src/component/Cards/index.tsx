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
				<Text fontSize={20} fontFamily="Montserrat_900Black" color={color.branco}>
						Titulo da postagem
					</Text>
				<Center backgroundColor={color.cinzaEscuro} minH={'60%'} minW={'100%'}>
					<Text fontFamily="Montserrat_900Black" fontSize={'4xl'} color={color.branco}>
						{tipo}
					</Text>
				</Center>
				<HStack space={2} p={3} minW={'100%'}>
					<Center backgroundColor={color.cinza} rounded={'full'} size={10}>
					<FontAwesome name="user" size={28} color={color.branco} />
					</Center>
					<Text fontSize={'md'} fontFamily={'Inter_600SemiBold'} alignSelf={'center'} color={color.branco}>Nome do usuário</Text>
				</HStack>
				<Box px={3} minW={'100%'}>
					
				</Box>
			</Center>
		)
	}
}