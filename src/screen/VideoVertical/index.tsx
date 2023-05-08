import { Box, Center, HStack, Pressable, ScrollView, Text, VStack } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import { useFonts, Montserrat_900Black } from '@expo-google-fonts/montserrat'
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import Header from '../../component/Header'

export default function index(props) {
	const {} = props
	let [fontsLoaded] = useFonts({
		Montserrat_900Black,
		Inter_400Regular,
		Inter_600SemiBold,
	})
	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<Box flex={1} bg={color.preto}>
				<Center bgColor={color.cinza} flex={1} w={'100%'}>
					<Text fontFamily="Montserrat_900Black" fontSize={'4xl'} color={color.branco}>
						VIDEO
					</Text>
				</Center>

				<Box px={5} pt={3} pb={1} minW={'100%'} position={'absolute'} bottom={5} >
					<VStack space={4} minW={'100%'} alignItems={'flex-end'}>
						<Pressable>
							<FontAwesome name="heart-o" color={color.branco} size={40} />
						</Pressable>
						<Pressable>
							<Ionicons name="chatbubble-outline" color={color.branco} size={40} />
						</Pressable>
						<Pressable>
							<Ionicons name="ios-paper-plane-outline" color={color.branco} size={40} />
						</Pressable>
						<Pressable>
							<Ionicons name="md-bookmark-outline" color={color.branco} size={40} />
						</Pressable>
					</VStack>
					<Text pt={5} fontSize={20} fontFamily="Montserrat_900Black" color={color.branco}>
						Titulo da postagem
					</Text>
					<Text pt={5} fontSize={15} fontFamily="Montserrat_400Black" color={color.branco}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel quam rutrum, sagittis lectus quis, sagittis turpis. 
					</Text>
				</Box>
			</Box>
		)
	}
}
