import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Center,
  } from '@chakra-ui/react'

import Stats from './Stats'
import Inputs from './Inputs'

export default function Provider () {
	return (
		<>
			<Container className="provider--body">
				<Stats/>
				<Inputs />
			</Container>
		</>
	)
}