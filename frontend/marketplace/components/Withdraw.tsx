import { 
    Stack,
    Text, 
    Flex,
    Heading,
    Button,
    Link,
	Input,
    Box 
} from '@chakra-ui/react'

export default function Withdraw() {
	return (
		<Box className='inputs-block'>
			<Heading className='provider--heading'>Withdraw Credits</Heading>
			<Box className='inputs'>
				<Text size='md' m='1.5rem 0rem' p='1rem 2rem' border='2px solid #DAFFFB' borderRadius='10px'>Current Amount: 42€</Text>

			</Box>
			<Button className='main-button' on-Click={console.log("hola")}>Withdraw</Button>
		</Box>
	)
}