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
		<Box m='0'>
        <Heading fontSize={"2.2rem"} color={"brand.white.normal"} mx={"7.5rem"} mb={"3rem"} pt={"1rem"}>
            Become a Provider:
        </Heading>
            <Flex mx='10%' mb='3rem' gap='7.5rem' color='brand.white.normal'>
                <Box>
					<Image
						src="become-provider-1.png"
						pt={"2rem"}
					/>
					<Heading>
						Sign Up
					</Heading>
					Create your account with your wallet. No KYC required!
				</Box>
                <Box>
					<Image
						src="become-provider-2.png"
					/>
					<Heading>
						Offer a service
					</Heading>
					Build a machine learning model or fine tune an existing one.
				</Box>
                <Box>
					<Image
						src="become-provider-3.png"
					/>
					<Heading>
						Start Earning
					</Heading>
					Start collecting payments when a client uses your API.
				</Box>
            </Flex>     
    </ Box>
)
}
