import { 
    Stack,
    Text, 
    Flex,
    Heading,
    Button,
    Link,
    Box 
} from '@chakra-ui/react'

import CategoryCard from './CategoryCard'
import NextLink from 'next/link'

export const Categories = () => (
    <Box m='0' py={"2.5rem"}>
        <Flex maxW='7xl' justifyContent='space-between'>
            <Heading fontSize={"2.2rem"} color={"brand.white.normal"} mx={"7.5rem"} mb={"5rem"} >
                Browse Categories:
            </Heading>
            <Button variant='outline' color='brand.blue.light' _hover={{color:'brand.blue.dark', background:'brand.blue.light'}}>
                View All
            </Button>
        </Flex>
        <Flex mx='10%' mb='3rem' gap='7.5rem' justifyContent='center'>
            <CategoryCard name="Machine Learning" imageURL='ml.png'  />
            <CategoryCard name="LLMs & Embeddings" imageURL='llm.png'  />
            <CategoryCard name="Image Generation" imageURL='owl.png'  />
        </Flex>     
    </ Box>
)

export default Categories