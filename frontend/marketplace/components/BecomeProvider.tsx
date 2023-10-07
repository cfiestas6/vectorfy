import { 
    Stack,
    Text, 
    Flex,
    Heading,
	Image,
    Button,
    Link,
    Box 
} from '@chakra-ui/react'

import NextLink from 'next/link'

export default function BecomeProvider() {
	return (
		<Box m='0' py={"2.5rem"} mb={"2.5rem"}>
        <Heading fontSize={"2.2rem"} color={"brand.white.normal"} mx={"7.5rem"} mb={"3rem"} pt={"1rem"}>
            Become a Provider:
        </Heading>
            <Flex mx='10%' mb='3rem' gap='7.5rem' color='brand.white.normal'>
                <Flex px='2rem' flexDirection='column'>
					<Image src="become-provider-1.png"/>
					<Heading mb='0.5rem' textAlign='center' size='md'>
						Sign Up
					</Heading>
					<Text textAlign='center'>
						Create your account with your wallet. No KYC required!
					</Text>
				</ Flex>
                <Flex px='2rem' flexDirection='column'>
					<Image src="become-provider-2.png"/>
					<Heading mb='0.5rem' textAlign='center' size='md'>
						Offer a service
					</Heading>
					<Text textAlign='center'>
						Build a machine learning model or fine tune an existing one.
					</Text>
				</ Flex>
                <Flex px='2rem' flexDirection='column'>
					<Image src="become-provider-3.png"/>
					<Heading mb='0.5rem' textAlign='center' size='md'>
						Start Earning
					</Heading>
					<Text textAlign='center'>
						Start collecting payments when a client uses your API.
					</Text>
				</Flex>
            </Flex>     
    </ Box>
)
}
