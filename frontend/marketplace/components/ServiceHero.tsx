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
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
    Center,
  } from '@chakra-ui/react'

import ServiceDescription from '@/components/ServiceDescription'
import { useDisclosure } from '@chakra-ui/react'
import { InjectedConnector } from 'wagmi/connectors/injected' 
import { 
	useAccount,
	usePrepareContractWrite,
	useConnect,
	useContractRead, 
	useContractWrite,
	useDisconnect, 
	useWaitForTransaction
} from "wagmi";
import { CONTRACT_ADDRESS as contractAddress } from '../utils/constants';
import abi from '../utils/abi.json';
import { Abi } from 'viem';
import CallUseCredits from './CallUseCredits';
  
  export default function ServiceHero() {
    const IMAGE = 'geography-llm.png'
	const { isOpen, onOpen, onClose } = useDisclosure()
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })
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
				<Button onClick={onOpen} className='main-button' mt='1rem' ml='0.5rem'>
					Start
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
        		<ModalOverlay />
        		<ModalContent>
          		<ModalHeader>Get Started with </ModalHeader>
          		<ModalCloseButton />
          		<ModalBody>
					<Button disabled={!isLoading} onClick={write} mt='1rem' ml='0.5rem'>
						Buy Credits
					</Button>
					<CallUseCredits/>
          		</ModalBody>
        		</ModalContent>
      			</Modal>
			</Box>
          </Stack>
        </Stack>
		<ServiceDescription/>
      </Container>
    )
  }