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

export default function Inputs() {
	return (
		<Box className='inputs-block'>
			<Heading className='provider--heading'>Add Gig</Heading>
			<Box className='inputs'>
				<Input type='text' placeholder='Gig Name' className='input'></Input>
				<Input type='text' placeholder='Price' className='input'></Input>
			</Box>
			<Button className='main-button' on-Click={console.log("hola")}>Add</Button>
		</Box>
	)
}