import {
    Box,
    Flex,
    Heading,
    Image,
    Center,
} from '@chakra-ui/react' 

type Category = {
    name: string,
    imageURL: string
}

export default function CategoryCard({name, imageURL}: Category): JSX.Element {
    return (
        <Box bg='brand.blue.light' boxShadow={"#DAFFFB 5px 5px 30px 0px"} rounded='lg' flexBasis='50%'>
            <Box width={"100%"} m={"0"}>
                <Image
                    m={"0"}
                    src={imageURL}
                    width={"100%"}
                    height={"20rem"}
                    roundedTop={'lg'}
                />
            </Box>
            <Flex 
                alignItems='center'
                justifyContent='center'
                gap='1rem'
                minH='5rem'
                px='2vw'
                mb='0.7rem'
                borderRadius='md'
                > 
                <Box textAlign='center'>
                    <Heading textAlign='center' size='sm'>{name}</Heading>
                </Box>
            </Flex>
        </Box>
    )
}
