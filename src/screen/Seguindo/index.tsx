import { Center, Box, Text, FlatList } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import Header from '../../component/Header'
import CarroselCategoria from '../../component/CarroselCategoria'
import Cards from '../../component/Cards'

export default function index(props) {
	const {} = props
	const dados =['IMAGEM', 'AUDIO', 'VIDEO', 'EBOOK', 'ARTIGO', 'IMAGEM', 'AUDIO', 'VIDEO', 'EBOOK', 'ARTIGO']
	return (
		<Box flex={1} backgroundColor={color.preto} safeArea>
			<Header />
			<CarroselCategoria s={true} />
			<FlatList flex={1} data={dados} renderItem={({ item }) => <Cards tipo={item}/>} />
		</Box>
	)
}
