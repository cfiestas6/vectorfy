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
	border,
  } from '@chakra-ui/react'

import Card from './Card'

export default function Stats() {
	return (
		<Box className='App'>
			<Card /* name='Data1:' value='999' *//>
			<Card /* name='Data2:' value='999' *//>
			<Card /* name='Data3:' value='999' *//>
		</Box>
	);
  }