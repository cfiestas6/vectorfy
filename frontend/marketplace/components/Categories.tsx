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

type Category = {
    name: string,
    imageURL: string
}

export const Categories = () => (
    <Box m='0'>
        <Flex alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
            <Flex mx='10%' mb='3rem' gap='7.5rem'>
                <CategoryCard name="Machine Learning" imageURL='ml.png'  />
                <CategoryCard name="LLMs & Embeddings" imageURL='llm.png'  />
            </Flex>
            <Flex mx='10%' mb='3rem' gap='7.5rem' >
                <CategoryCard name="Chatbots" imageURL='chatbot.png'  />
                <CategoryCard name="Image Generation" imageURL='owl.png'  />
            </Flex>     
        </Flex>
    </ Box>
)

export default Categories