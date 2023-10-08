import {
	Heading,
	Box,
	Container,
	Flex,
	SimpleGrid,
	Image,
	Stack,
	Text,
	useColorModeValue,
  } from '@chakra-ui/react'

export default function Card() {
	return (
		  <Box className='Box'>
			  <Text className='data--name'>AAAA{/* {props.name} */}</Text>
			  <Text className='data--value'>AAA{/* {props.value} */}</Text>
		  </Box>
	)
  }