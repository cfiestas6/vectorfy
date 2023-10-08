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
import Withdraw from './Withdraw'

export default function Provider () {
	return (
      <Box 
        color='whitesmoke'
        display='flex'
        justifyContent='center'
        alignItems='space-between'
        margin='8rem 0rem'
      >
			  <Inputs />
			  <Withdraw />
      </Box>
	)
}