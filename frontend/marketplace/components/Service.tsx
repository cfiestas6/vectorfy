import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Center,
  } from '@chakra-ui/react'
  
  export default function Service() {
    const IMAGE = 'geography-llm.png'
    return (
      <Container minH='2xl' maxW={'4xl'} pt='2rem'>
        <Stack
			pt='5rem'
            spacing={{ base: 8, md: 8 }}
            direction={{ base: 'column', md: 'row' }}>

          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
  
            <Center p={5}>
              <Box
                role={'group'}
                p={'2rem'}
                maxW={'100%'}
                w={'full'}
                boxShadow={'7xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'100%'}
                  _after={{
					  transition: 'all .3s ease',
					  content: '""',
					  w: 'full',
					  h: 'full',
					  pos: 'absolute',
					  top: 5,
					  left: 0,
					  backgroundImage: `url(${IMAGE})`,
					  filter: 'blur(25px)',
					  zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: 'blur(30px)',
						},
					}}>
                  <Image
                    rounded={'xl'}
                    objectFit={'cover'}
                    src={IMAGE}
                    alt="#"
					/>
                </Box>
              </Box>
            </Center>  
          </Flex>

		  <Stack flex={1} 
			  maxH='20rem'
			  mt='1rem'
			  display='table-column'
		  >
			<Box padding='0.75rem'>
            	<Heading size='md' color='brand.white.dark'>
            	    Created By:
            	</Heading>
            	<Text color='brand.white.dark'>
            	    cfiestas
            	</Text>
			</Box>
			<Box padding='0.75rem'>
            	<Heading size='md' color='brand.white.dark'>
            	    Price:
            	</Heading>
            	<Text color='brand.white.dark'>
            	    5$
            	</Text>
			</Box>
			<Box padding='0.75rem'>
            	<Heading size='md' color='brand.white.dark'>
            	    Details:
            	</Heading>
            	<Text color='brand.white.dark'>
            	    API Endpoint: -
            	</Text>
			</Box>
			<Box>
				<Button className='buy-button' mt='1rem' ml='0.5rem'>
					Buy!
				</Button>
			</Box>
          </Stack>


        </Stack>
		<Box py='2rem'>
			<Heading color='brand.white.dark' size='3xl'>
				Geography LLM
			</Heading>
			<Text color='brand.white.dark' pt='2rem' pb='10rem'>
				LLM-Geo is an AI-powered geographic information system that leverages the general abilities of Large Language Models in natural language understanding, reasoning, and coding for addressing spatial problems with automatic spatial data collection, analysis, and visualization. It can help developers create custom applications that can solve complex spatial problems with minimal human intervention. LLM-Geo is built using the GPT-4 API in a Python environment, making it easy to integrate into existing Python-based GIS workflows.
			</Text>
		</Box>
      </Container>

    )
  }