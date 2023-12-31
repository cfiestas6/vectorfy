import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Link,
  Image,
} from '@chakra-ui/react'


type Gig = {
    name: string,
    user: string,
    price: number,
    imageURL: string,
    url: string,
}

export default function GigCard({name, user, price, imageURL, url}: Gig): JSX.Element{
  return (
    <Center py={12}>
      <Link href={url}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg='brand.white.dark'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${imageURL})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(35px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={imageURL}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {user}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {price}$
            </Text>

          </Stack>
        </Stack>
      </Box>
      </ Link>
    </Center>
   
  )
}