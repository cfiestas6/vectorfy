import {
    Box,
    Flex,
    Heading,
    Link,
    Image,
    Button,
    Center,
} from '@chakra-ui/react' 
// import Link from 'next/link'

type Category = {
    name: string,
    imageURL: string
}        

export default function CategoryCard({name, imageURL}: Category): JSX.Element {
    return (
        <Link href='#'>
            <Box className='book'
                backgroundImage={imageURL}
                backgroundSize={"20rem 22rem"}
                >
                <Heading className='cover'>
                    {name}
                </Heading>
            </Box>
        </Link>
    )
}