import { Button } from '@chakra-ui/react'
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
  
export default function CallUseCredits(){
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })


 	const { config, error } = usePrepareContractWrite({
		address: contractAddress,
		abi: abi as unknown as Abi,
		functionName: 'useCredits',
		args: ["0", "1"],
	})
	const { data, write } = useContractWrite(config)
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })
    return (
		<Button disabled={!isLoading} onClick={write} mt='1rem' ml='0.5rem'>
			Activate Credits
		</Button>
    )
}