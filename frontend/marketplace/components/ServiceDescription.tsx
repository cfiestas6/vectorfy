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
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
    Center,
  } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
  
export default function ServiceDescription() {
	const IMAGE = 'geography-llm.png'
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
	<Box py='2rem' >
		<Heading color='brand.white.dark' size='3xl'>
			Geography LLM
		</Heading>
		<Text color='brand.white.dark' pt='2rem' pb='10rem'>
			LLM-Geo is an AI-powered geographic information system that leverages the general abilities of Large Language Models in natural language understanding, reasoning, and coding for addressing spatial problems with automatic spatial data collection, analysis, and visualization. It can help developers create custom applications that can solve complex spatial problems with minimal human intervention. LLM-Geo is built using the GPT-4 API in a Python environment, making it easy to integrate into existing Python-based GIS workflows.
		</Text>
	</Box>
)
}
