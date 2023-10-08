import { 
    Stack,
    Text, 
    Flex,
    Heading,
    Button,
    Link,
    Box, 
    background
} from '@chakra-ui/react'

import GigCard from './GigCard'
import NextLink from 'next/link'
import { color } from 'framer-motion'


export default function Gigs() {
	return (
		<Box m='0' py={"2.5rem"}>
            <Flex maxW='7xl' justifyContent='space-between'>
                <Heading fontSize={"2.2rem"} color={"brand.white.normal"} mx={"7.5rem"} mb={"3rem"} >
                    Marketplace:
                </Heading>
                <Button variant='outline' color='brand.blue.light' _hover={{color:'brand.blue.dark', background:'brand.blue.light'}}>
                    View All
                </Button>
            </Flex>
            <Flex mx='10%' mb='3rem' gap='7.5rem'>
                <GigCard name="Geography LLM" user="cfiestas" price={5} imageURL='geography-llm.png' url='/service' />
                <GigCard name="AI Logo Maker" user="0xNoel" price={9} imageURL='logo-maker.png' url='#' />
                <GigCard name="Branding Expert QA" user="dlopez" price={15} imageURL='branding-expert.png' url='#' />
            </Flex>
        </ Box>
)
}
