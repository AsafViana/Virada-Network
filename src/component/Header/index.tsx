import { Box, Text } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import Logo from '../../component/Logo'

export default function index(props) {
	const {} = props
	return (
		<Box alignItems={'center'} w={'100%'} h={20} backgroundColor={color.preto} flexDirection={'row'} px={3}>
			<Logo />
		</Box>
	)
}
