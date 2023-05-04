import { Center, Text, HStack, Pressable } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform, ScrollView } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_300Light } from '@expo-google-fonts/inter'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function index(props) {
	const { pv, s } = props
	const navigation = useNavigation()
	const categorias = [{ nome: 'PARA VOCÊ' }, { nome: 'SEGUINDO' }]
	let [fontsLoaded] = useFonts({
		Inter_300Light,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<ScrollView style={{ maxHeight: '5%' }} horizontal showsHorizontalScrollIndicator={false} overScrollMode="never">
				<HStack pl={5} pr={3} space={2}>
					{pv ? (
						<Center rounded={'full'} overflow={'hidden'} maxH={8}>
							<LinearGradient style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 9 }} colors={['#FF0000', '#FF5C00', '#0500FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
								<Text fontFamily="Inter_300Light" color={color.branco}>
									PARA VOCÊ
								</Text>
							</LinearGradient>
						</Center>
					) : (
						<Pressable
							justifyContent={'center'}
							alignItems={'center'}
							borderRadius="full"
							bg={color.branco}
							px={2}
							maxH={8}
							onPress={() => {
								navigation.navigate('ParaVoce')
							}}>
							<Text fontFamily="Inter_300Light" color={color.preto}>
								PARA VOCÊ
							</Text>
						</Pressable>
					)}
					{s ? (
						<Center rounded={'full'} overflow={'hidden'} maxH={8}>
							<LinearGradient style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 9 }} colors={['#FF0000', '#FF5C00', '#0500FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
								<Text fontFamily="Inter_300Light" color={color.branco}>
									SEGUINDO
								</Text>
							</LinearGradient>
						</Center>
					) : (
						<Pressable
							justifyContent={'center'}
							alignItems={'center'}
							borderRadius="full"
							bg={color.branco}
							px={2}
							maxH={8}
							onPress={() => {
								navigation.navigate('Seguindo')
							}}>
							<Text fontFamily="Inter_300Light" color={color.preto}>
								SEGUINDO
							</Text>
						</Pressable>
					)}
				</HStack>
			</ScrollView>
		)
	}
}
