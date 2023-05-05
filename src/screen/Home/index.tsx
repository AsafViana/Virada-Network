import { Center, Box, Text, FlatList, HStack, Pressable } from 'native-base'
import React, { useState, useEffect } from 'react'
import { color } from '../../../env.json'
import Header from '../../component/Header'
import Cards from '../../component/Cards'
import { LinearGradient } from 'expo-linear-gradient'
import AppLoading from 'expo-app-loading'
import { Inter_300Light, useFonts } from '@expo-google-fonts/inter'
import { useNavigation } from '@react-navigation/native'

export default function index(props) {
	const {} = props
    const [ParaVoce, setParaVoce] = useState(true)
    const [Seguindo, setSeguindo] = useState(false)
	const dados =['IMAGEM', 'AUDIO', 'VIDEO', 'EBOOK', 'ARTIGO', 'IMAGEM', 'AUDIO', 'VIDEO', 'EBOOK', 'ARTIGO']
    const navigation = useNavigation()
	let [fontsLoaded] = useFonts({
		Inter_300Light,
	})

    function handleParaVoce(){
        setParaVoce(true)
        setSeguindo(false)
    }

    function handleSeguindo(){
        setParaVoce(false)
        setSeguindo(true)
    }

	if (!fontsLoaded) {
		return <AppLoading />
	} else {
	return (
		<Box flex={1} backgroundColor={color.preto}pt={4}>
			<Header />
			<Box>
				<HStack pb={3} pl={5} pr={3} space={2}>
					{ParaVoce ? (
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
							onPress={handleParaVoce}>
							<Text fontFamily="Inter_300Light" color={color.preto}>
								PARA VOCÊ
							</Text>
						</Pressable>
					)}
					{Seguindo ? (
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
							onPress={handleSeguindo}>
							<Text fontFamily="Inter_300Light" color={color.preto}>
								SEGUINDO
							</Text>
						</Pressable>
					)}
				</HStack>
			</Box>
			<FlatList overScrollMode='never' flex={1} data={dados} renderItem={({ item }) => <Cards tipo={item}/>} />
		</Box>
	)
}}
