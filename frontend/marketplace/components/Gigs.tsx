import { 
    Stack,
    Text, 
    Flex,
    Heading,
    Button,
    Link,
    Box 
} from '@chakra-ui/react'

import GigCard from './GigCard'
import NextLink from 'next/link'


export default function Gigs() {
	return (
		<Box m='0'>
        <Heading fontSize={"2.2rem"} color={"brand.white.normal"} mx={"7.5rem"} mb={"3rem"} >
            Marketplace:
        </Heading>
            <Flex mx='10%' mb='3rem' gap='7.5rem'>
                <GigCard name="Geography LLM" user="elnano" price={80} imageURL='geography-llm.png'  />
                <GigCard name="AI Logo Maker" user="churumbe" price={80} imageURL='logo-maker.png'  />
                <GigCard name="Branding Expert QA" user="nacho" price={80} imageURL='branding-expert.png'  />
            </Flex>     
    </ Box>
)
}
