import { Box, Center, HStack, Pressable, ScrollView, Text } from 'native-base'
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
			<ScrollView w="100%" h="100%" bg={color.preto} overScrollMode='never'>
				<Header />
				<Center bgColor={color.cinza} w={'100%'} h={'360'}>
					<Text fontFamily="Montserrat_900Black" fontSize={'4xl'} color={color.branco}>
						IMAGEM
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
					<Text pt={5} fontSize={20} fontFamily="Montserrat_900Black" color={color.branco}>
						Titulo da postagem
					</Text>
					<Text pt={5} fontSize={15} fontFamily="Montserrat_400Black" color={color.branco}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel quam rutrum, sagittis lectus quis, sagittis turpis. Duis dictum ex eu massa hendrerit, vitae accumsan justo volutpat. Proin a felis non diam pellentesque dapibus ac in enim. Proin est urna, aliquam eu
						tristique quis, elementum pellentesque tortor. Mauris fermentum non risus sed ullamcorper. Sed consectetur in nisi sed egestas. Vestibulum et augue a sapien bibendum laoreet posuere pharetra magna. Phasellus neque elit, ornare ac justo sed, vulputate pellentesque purus. Vestibulum
						elementum tempus gravida. Nam bibendum ante at posuere feugiat. Fusce tortor quam, eleifend et lectus sit amet, mollis egestas lacus. Sed facilisis eros arcu, et sagittis odio ultricies ac. Fusce pulvinar lacus sed fringilla scelerisque. Curabitur velit risus, semper vitae finibus
						nec, pellentesque ac quam. Fusce aliquet dui mi, ac lacinia mi consectetur eget. Duis ut massa sed elit ullamcorper varius. Integer non fermentumconvallis felis, at faucibus eros magna a lorem.
					</Text>
				</Box>
			</ScrollView>
		)
	}
}
