import styled from '@emotion/styled'
import WalletIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import CloseIcon from '@mui/icons-material/CloseRounded'
import { Theme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import { encodeFunctionData } from 'viem'
import GelatoTaskStatusLabel from 'src/components/gelato-task-status-label/GelatoTaskStatusLabel'
import { TokenboundClient } from '@tokenbound/sdk'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useState } from 'react'
import SafeInfo from 'src/components/safe-info/SafeInfo'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'
import { SafeVersion} from '@safe-global/safe-core-sdk-types'
import { ethers } from 'ethers'
import Safe, { EthersAdapter, getSafeContract } from '@safe-global/protocol-kit'
import SafeApiKit from '@safe-global/api-kit'
import { MetaTransactionData, SafeTransactionDataPartial, MetaTransactionOptions} from '@safe-global/safe-core-sdk-types'
import { GelatoRelayPack } from '@safe-global/relay-kit'
import AccountAbstraction from '@safe-global/account-abstraction-kit-poc'

const OnRampKitDemo = () => {
  const {
    ownerAddress,
    openStripeWidget,
    closeStripeWidget,
    safeSelected,
    chain,
    chainId,
    isAuthenticated,
    web3Provider,
    loginWeb3Auth,
    isRelayerLoading,
    setGelatoTaskId,
    setIsRelayerLoading,
    relayTransaction,
    gelatoTaskId,

  } = useAccountAbstraction()

  const [transactionHash, setTransactionHash] = useState<string>('')


  const [showStripeWidget, setShowStripeWidget] = useState<boolean>(false)

  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [tokenId, setTokenId] = useState('');

  const handleFromAddressChange = (event: SelectChangeEvent) => {
    console.log("handleFromAddressChange")
    console.log(event.target.value)
    setFromAddress(event.target.value as string);
    console.log(fromAddress)
  };

  const handleToAddressChange = (event: SelectChangeEvent) => {
    console.log("handleToAddressChange")
    console.log(event.target.value)
    setToAddress(event.target.value as string);
    console.log(toAddress)
  };

  const handleTokenIdChange = (event: SelectChangeEvent) => {
    console.log("handleToAddressChange... event has:")
    console.log(event.target.value)
    setTokenId(event.target.value as string);
    console.log("Token ID is:")
    console.log(tokenId)
  };

  const sendUSDCFromWallettoSafe = async (to_address: string = "0x986Ae64d979287601DC8A81Ed989f11563775460", token_address: string ="0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",amount: string = "1") => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()
      const tokenAddress = token_address;
      const tokenAbi = ["function transfer(address _to, uint256 _value) public returns (bool success)"];
      const usdc = new ethers.Contract(tokenAddress, tokenAbi, signer);
      const tx = await usdc.transfer(to_address, ethers.utils.parseUnits(amount, 6));    
      console.log(tx)

    }
    
    
  }

  const testTBA2 = async () => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

     const abiPathToken = require(`../abi/ERC20.json`);

      const tokenAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; // USDC
      const txnData = encodeFunctionData({
        abi: abiPathToken.abi,
        functionName: 'transferFrom',
        args: ["0x5439e07Bc9832C1033519A982d41C032Fe5763D4","0x986ae64d979287601dc8a81ed989f11563775460", ethers.utils.parseUnits("1", 6)]
      });


      const tokenAbi1 = ["function transferFrom(address sender,address recipient , uint256 _value) public returns (bool success)"];
      const usdc = new ethers.Contract(tokenAddress, tokenAbi1);
      //const txnData = await usdc.populateTransaction["transferFrom(address,address,uint256)"]("0x5439e07Bc9832C1033519A982d41C032Fe5763D4","0x986ae64d979287601dc8a81ed989f11563775460",ethers.utils.parseUnits("1", 6))

  
      //console.log(txnData)

      const tokenboundClient = new TokenboundClient({ signer, chainId: 137 })

      const nft = await tokenboundClient.getNFT({
        accountAddress: "0x5439e07Bc9832C1033519A982d41C032Fe5763D4",
      })
       
      const { tokenContract, tokenId, chainId } = nft
       
      console.log({ tokenContract, tokenId, chainId })

      const executeCall = await tokenboundClient.executeCall({
        account: "0x5439e07Bc9832C1033519A982d41C032Fe5763D4",
        to: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        value: BigInt(0),
        data: txnData
      })

      console.log(executeCall)


      /*


      const tokenAbi = ["function executeCall(address to, uint256 value, bytes data)"];

      
      const tba = new ethers.Contract("0x5439e07Bc9832C1033519A982d41C032Fe5763D4", tokenAbi, signer);
      
      console.log(tba)
      const tx = await tba.executeCall("0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",0,txnData.data)
      console.log(tx)*/


    }
    
    
  }

  const sendUSDCFromSafetoWallet = async (to_address: string = "0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049", token_address: string ="0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",amount: string = "1") => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })

      interface Receiver {
        address: string
      }
      
      const receivers: Receiver[] = [{address: to_address}]


      const tokenAddress = to_address;
      const tokenAbi = ["function transfer(address _to, uint256 _value) public returns (bool success)"];

      
      const usdc = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await usdc.populateTransaction["transfer(address,uint256)"](to_address,ethers.utils.parseUnits(amount, 6))
      console.log(tx)

      const safeTransactionData: MetaTransactionData = {
        to: token_address,
        data: tx.data!,
        value: "0",
    }

    const chainId = await ethAdapter.getChainId();


    // Create a Safe transaction with the provided parameters
    const safeTransaction = await safeSDK.createTransaction({ safeTransactionData })

    // Deterministic hash based on transaction parameters
    const safeTxHash = await safeSDK.getTransactionHash(safeTransaction)

    // Sign transaction to verify that the transaction is coming from owner 1
    const senderSignature = await safeSDK.signTransactionHash(safeTxHash)

    const txServiceUrl = 'https://safe-transaction-polygon.safe.global'
    await safeService.proposeTransaction({
        safeAddress,
        safeTransactionData: safeTransaction.data,
        safeTxHash,
        senderAddress: (await ethAdapter.getSignerAddress())!,
        senderSignature: senderSignature.data,
    })

    console.log("Transaction: ")
    console.log(safeTxHash)
    
    const signature = await safeSDK.signTransactionHash(safeTxHash)
    const response = await safeService.confirmTransaction(safeTxHash, signature.data)
 
    console.log('Transaction confirmed:')
    console.log(response)

    const executeTxResponse = await safeSDK.executeTransaction(safeTransaction)
    const receipt = await executeTxResponse.transactionResponse?.wait()!
    
    console.log('Transaction executed:')
    console.log(receipt)


    }
    
    
  }

  const burnNFTRelay = async (tokenAddress: string = '0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205', tokenID: string = "0") => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })
      
      const tokenAbi = ["function burn(uint256 tokenId)"];

      
      const nft = new ethers.Contract(tokenAddress, tokenAbi);
      console.log(nft)
      const tx = await nft.populateTransaction["burn(uint256)"](tokenID)
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: tokenAddress,
        data: tx.data!,
        value: "0",
    }]

  
    const relayPack = new GelatoRelayPack("saxHHH3f62ShtCr8gyXHPyoHvGNZlf0_mmwFswTIktQ_")

    const safeAccountAbstraction = new AccountAbstraction(signer)

    await safeAccountAbstraction.init({ relayPack })

    const options: MetaTransactionOptions = {
      isSponsored: true,
      gasLimit: '600000', // in this alfa version we need to manually set the gas limit
      gasToken: ethers.constants.AddressZero // native token
    }

    const gelatoTaskId = await safeAccountAbstraction.relayTransaction(safeTransactionData, options)
    console.log(gelatoTaskId)
    setGelatoTaskId(gelatoTaskId)

    }
    
    
  }

  const createAccountRelay = async (chainId:number = 137, implementationAddress:string = "0x2d25602551487c3f3354dd80d76d54383a243358", tokenAddress:string = '0x02101dfB77FDE026414827Fdc604ddAF224F0921', nftTokenAddress:string = "0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205",tokenId:string = "6") => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })
      
      const tokenAbi = ["function createAccount(address implementation, uint256 chainId, address tokenContract, uint256 tokenId, uint256 salt, bytes calldata initData) external returns (address)"];
      
      const registry = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await registry.populateTransaction["createAccount(address,uint256,address,uint256,uint256,bytes)"](implementationAddress,chainId,nftTokenAddress,tokenId,0,"0x")
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: tokenAddress,
        data: tx.data!,
        value: "0",
    }]

  
    const relayPack = new GelatoRelayPack("saxHHH3f62ShtCr8gyXHPyoHvGNZlf0_mmwFswTIktQ_")

    const safeAccountAbstraction = new AccountAbstraction(signer)

    await safeAccountAbstraction.init({ relayPack })

    const options: MetaTransactionOptions = {
      isSponsored: true,
      gasLimit: '600000', // in this alfa version we need to manually set the gas limit
      gasToken: ethers.constants.AddressZero // native token
    }

    const gelatoTaskId = await safeAccountAbstraction.relayTransaction(safeTransactionData, options)
    setGelatoTaskId(gelatoTaskId)

    }
    
    
  }

  const testTBA = async () => {

   if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })


      const abiPathToken = require(`../abi/ERC20.json`);


      const tokenAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; // TODO: get desired ERC20 address from UI
      const txnData = encodeFunctionData({
        abi: abiPathToken.abi,
        functionName: 'transfer',
        args: ["0x986ae64d979287601dc8a81ed989f11563775460", ethers.utils.parseUnits("1", 6)]
      });
  
      console.log(txnData)


      const tokenAbi = ["function executeCall(address to, uint256 value, bytes data)"];

      
      const tba = new ethers.Contract("0x5439e07Bc9832C1033519A982d41C032Fe5763D4", tokenAbi);
      console.log(tba)
      const tx = await tba.populateTransaction["executeCall(address,uint256,bytes)"]("0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",0,txnData)
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: "0x5439e07Bc9832C1033519A982d41C032Fe5763D4",
        data: tx.data!,
        value: "0",
    }]

  
    const relayPack = new GelatoRelayPack("saxHHH3f62ShtCr8gyXHPyoHvGNZlf0_mmwFswTIktQ_")

    const safeAccountAbstraction = new AccountAbstraction(signer)

    await safeAccountAbstraction.init({ relayPack })

    const options: MetaTransactionOptions = {
      isSponsored: true,
      gasLimit: '600000', // in this alfa version we need to manually set the gas limit
      gasToken: ethers.constants.AddressZero // native token
    }

    const gelatoTaskId = await safeAccountAbstraction.relayTransaction(safeTransactionData, options)
    console.log(gelatoTaskId)
    setGelatoTaskId(gelatoTaskId)
      }

    }

  const transferNFTRelay = async (tokenAddress: string = '0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205', fromAddress: string = "0x986ae64d979287601dc8a81ed989f11563775460", toAddress:string = "0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049",tokenID: string = "5") => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })
      
      const tokenAbi = ["function safeTransferFrom(address from, address to, uint256 tokenId)"];

      
      const nft = new ethers.Contract(tokenAddress, tokenAbi);
      console.log(nft)
      const tx = await nft.populateTransaction["safeTransferFrom(address,address,uint256)"](fromAddress,toAddress,tokenID)
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: tokenAddress,
        data: tx.data!,
        value: "0",
    }]

  
    const relayPack = new GelatoRelayPack("saxHHH3f62ShtCr8gyXHPyoHvGNZlf0_mmwFswTIktQ_")

    const safeAccountAbstraction = new AccountAbstraction(signer)

    await safeAccountAbstraction.init({ relayPack })

    const options: MetaTransactionOptions = {
      isSponsored: true,
      gasLimit: '600000', // in this alfa version we need to manually set the gas limit
      gasToken: ethers.constants.AddressZero // native token
    }

    const gelatoTaskId = await safeAccountAbstraction.relayTransaction(safeTransactionData, options)
    console.log(gelatoTaskId)
    setGelatoTaskId(gelatoTaskId)

    }
    
    
  }


  const mintWithRelay = async (to_address: string = "0x986ae64d979287601dc8a81ed989f11563775460", tokenAddress: string ="0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205",tokenID: string = "4") => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })
      
      const tokenAbi = ["function safeMint(address to, uint256 tokenId)"];

      
      const nft = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await nft.populateTransaction["safeMint(address,uint256)"](to_address,tokenID)
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: tokenAddress,
        data: tx.data!,
        value: "0",
    }]

  
    const relayPack = new GelatoRelayPack("saxHHH3f62ShtCr8gyXHPyoHvGNZlf0_mmwFswTIktQ_")

    const safeAccountAbstraction = new AccountAbstraction(signer)

    await safeAccountAbstraction.init({ relayPack })

    const options: MetaTransactionOptions = {
      isSponsored: true,
      gasLimit: '600000', // in this alfa version we need to manually set the gas limit
      gasToken: ethers.constants.AddressZero // native token
    }

    const gelatoTaskId = await safeAccountAbstraction.relayTransaction(safeTransactionData, options)
    console.log(gelatoTaskId)
    setGelatoTaskId(gelatoTaskId)

    }
    
    
  }


  const sendUSDCFromSafetoWalletRelay = async (to_address: string = "0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049", tokenAddress: string = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", amount: string = "1") => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })

      interface Receiver {
        address: string
      }
      
      const receivers: Receiver[] = [{address: to_address}]



      const tokenAbi = ["function transfer(address _to, uint256 _value) public returns (bool success)"];

      
      const usdc = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await usdc.populateTransaction["transfer(address,uint256)"](to_address,ethers.utils.parseUnits(amount, 6))
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: tokenAddress,
        data: tx.data!,
        value: "0",
    }]

  
    const relayPack = new GelatoRelayPack("saxHHH3f62ShtCr8gyXHPyoHvGNZlf0_mmwFswTIktQ_")

    const safeAccountAbstraction = new AccountAbstraction(signer)

    await safeAccountAbstraction.init({ relayPack })

    const options: MetaTransactionOptions = {
      isSponsored: true,
      gasLimit: '600000', // in this alfa version we need to manually set the gas limit
      gasToken: ethers.constants.AddressZero // native token
    }

    const gelatoTaskId = await safeAccountAbstraction.relayTransaction(safeTransactionData, options)
    console.log(gelatoTaskId)
    setGelatoTaskId(gelatoTaskId)

    }
    
    
  }


  const sendUSDCFromWallettoSafeRelay = async () => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })

      interface Receiver {
        address: string
      }
      
      const receivers: Receiver[] = [{address: "0x986ae64d979287601dc8a81ed989f11563775460"}]


      const tokenAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
      const tokenAbi = ["function transfer(address _to, uint256 _value) public returns (bool success)"];

      
      const usdc = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await usdc.populateTransaction["transfer(address,uint256)"]("0x986ae64d979287601dc8a81ed989f11563775460",ethers.utils.parseUnits("1", 6))
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        data: tx.data!,
        value: "0",
    }]

  
    const relayPack = new GelatoRelayPack("saxHHH3f62ShtCr8gyXHPyoHvGNZlf0_mmwFswTIktQ_")

    const safeAccountAbstraction = new AccountAbstraction(signer)

    await safeAccountAbstraction.init({ relayPack })

    const options: MetaTransactionOptions = {
      isSponsored: false,
      gasLimit: '600000', // in this alfa version we need to manually set the gas limit
      gasToken: ethers.constants.AddressZero // native token
    }

    const gelatoTaskId = await safeAccountAbstraction.relayTransaction(safeTransactionData, options)
    console.log(gelatoTaskId)
    setGelatoTaskId(gelatoTaskId)

    }
    
    
  }

  const getSafeSDKx = async () => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signer || web3Provider});

      const safeVersion: SafeVersion = `1.3.0`

  
      const safeContract  = await getSafeContract({
        ethAdapter: ethAdapter,
        safeVersion,
        customSafeAddress: safeSelected
      })
  
      const safeAddress = safeContract.getAddress()


      const safeSDK = await Safe.create({ ethAdapter, safeAddress })

      const safeService = new SafeApiKit({
        txServiceUrl: 'https://safe-transaction-polygon.safe.global',
        ethAdapter
      })



      const safeTransactionData: MetaTransactionData = {
        to: "0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049",
        data: '0x',
        value: ethers.utils.parseUnits('1.00', 'ether').toString(),
    }



    const chainId = await ethAdapter.getChainId();


    // Create a Safe transaction with the provided parameters
    const safeTransaction = await safeSDK.createTransaction({ safeTransactionData })

    // Deterministic hash based on transaction parameters
    const safeTxHash = await safeSDK.getTransactionHash(safeTransaction)

    // Sign transaction to verify that the transaction is coming from owner 1
    const senderSignature = await safeSDK.signTransactionHash(safeTxHash)

    const txServiceUrl = 'https://safe-transaction-polygon.safe.global'
    await safeService.proposeTransaction({
        safeAddress,
        safeTransactionData: safeTransaction.data,
        safeTxHash,
        senderAddress: (await ethAdapter.getSignerAddress())!,
        senderSignature: senderSignature.data,
    })

    console.log("Transaction: ")
    console.log(safeTxHash)
    
    const signature = await safeSDK.signTransactionHash(safeTxHash)
    const response = await safeService.confirmTransaction(safeTxHash, signature.data)
 
    console.log('Transaction confirmed:')
    console.log(response)

    const executeTxResponse = await safeSDK.executeTransaction(safeTransaction)
    const receipt = await executeTxResponse.transactionResponse?.wait()!
    
    console.log('Transaction executed:')
    console.log(receipt)


    }
    
    
  }

  return (
    <>
      <Typography variant="h2" component="h1">
        Fund your wallet
      </Typography>

      {!isAuthenticated ? (
        <ConnectedContainer
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Typography variant="h4" component="h3" fontWeight="700">
            To use the Onramp Kit you need to be authenticated
          </Typography>

          <Button variant="contained" onClick={loginWeb3Auth}>
            Connect
          </Button>
        </ConnectedContainer>
      ) : (
        <Box display="flex" gap={3} alignItems="flex-start">
          {/* safe Account */}
          <ConnectedContainer>
            <Typography fontWeight="700">Safe Account</Typography>

            <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
              Your Safe account (Smart Contract) holds and protects your assets.
              <Button variant="contained" onClick={async () => {sendUSDCFromSafetoWalletRelay(ownerAddress,chain?.usdcAddress,"1")}}>
            X Send 1 USDC from Safe to Wallet Relayed
          </Button>
              <Button variant="contained" onClick={async () => {sendUSDCFromSafetoWallet("0x5439e07Bc9832C1033519A982d41C032Fe5763D4",chain?.usdcAddress,"1")}}>
            X Send 1 USDC from Safe to Wallet 
          </Button>
          <Button variant="contained" onClick={async () => {sendUSDCFromWallettoSafe(safeSelected,chain?.usdcAddress,"1")}}>
            X Send 1 USDC from Wallet to Safe 
          </Button>
          <Button variant="contained" onClick={async () => {mintWithRelay(safeSelected,chain?.nftAddress,"8")}}>
            Mint to Safe 
          </Button>
          <Button variant="contained" onClick={async () => {transferNFTRelay(chain?.nftAddress,safeSelected,ownerAddress,"8")}}>
            Transfer NFT from Safe to Wallet
          </Button>
          <Button variant="contained" onClick={async () => {burnNFTRelay(chain?.nftAddress,"4")}}>
            Burn NFT
          </Button>
          <Button variant="contained" onClick={async () => {createAccountRelay(chain?.chainNumber, chain?.tbaImplementationAddress, chain?.tbaRegistryAddress,chain?.nftAddress,"8")}}>
            Create Account
          </Button>
          <Button variant="contained" onClick={async () => {testTBA2()}}>
            TBA
          </Button>


          </Typography>
            {/* Safe Info */}
            {safeSelected && <SafeInfo safeAddress={safeSelected} chainId={chainId} />}
          </ConnectedContainer>

          {/* Selectors */}
          <ConnectedContainer
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="flex-start"
            flexShrink={0}
          >

          <FormControl fullWidth>
            <Select
              labelId="fromaddress-simple-select-label"
              id="fromaddress-simple-select"
              value={fromAddress}
              label="From Address"
              onChange={handleToAddressChange}
            >
              <MenuItem value="0x986Ae64d979287601DC8A81Ed989f11563775460">Safe</MenuItem>
              <MenuItem value="0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049">Wallet</MenuItem>
            </Select>
            </FormControl>
            <FormControl fullWidth>
            <Select
              labelId="toaddress-simple-select-label"
              id="toaddress-simple-select"
              value={toAddress}
              label="To Address"
              //onChange={handleFromAddressChange}
            >
              <MenuItem value="0x986Ae64d979287601DC8A81Ed989f11563775460">Safe</MenuItem>
              <MenuItem value="0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049">Wallet</MenuItem>
            </Select>
            </FormControl>

            <FormControl fullWidth>
            <Select
              labelId="tokenid-simple-select-label"
              id="tokenid-simple-select"
              value={tokenId}
              label="TokenId"
              //onChange={handleTokenIdChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>


          </ConnectedContainer>





          {/* Relay Transaction */}
          <ConnectedContainer
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="flex-start"
            flexShrink={0}
          >
            <Typography fontWeight="700">Relayed transaction</Typography>

            {/* Gelato status label */}
            {gelatoTaskId && (
              <GelatoTaskStatusLabel
                gelatoTaskId={gelatoTaskId}
                chainId={chainId}
                setTransactionHash={setTransactionHash}
                transactionHash={transactionHash}
              />
            )}

            {isRelayerLoading && <LinearProgress sx={{ alignSelf: 'stretch' }} />}

            {!isRelayerLoading && !gelatoTaskId && (
              <>
                <Typography fontSize="14px">
                  Check the status of your relayed transaction.
                </Typography>


              </>
            )}

            {/* Transaction details */}
            <Stack gap={0.5} display="flex" flexDirection="column">
              <Typography>
              </Typography>

              {safeSelected && (
                <Stack gap={0.5} display="flex" flexDirection="row">
                </Stack>
              )}
            </Stack>
          </ConnectedContainer>


          {/* Stripe widget */}
          <ConnectedContainer>
            <Typography fontWeight="700">Stripe widget</Typography>

            <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
              This widget is on testmode, you will need to use{' '}
              <Link
                href="https://docs.safe.global/learn/safe-core-account-abstraction-sdk/onramp-kit#considerations-and-limitations"
                target="_blank"
              >
                fake data
              </Link>{' '}
              in order to simulate the process. Available only in the United States.
            </Typography>

            {!showStripeWidget ? (
              <Tooltip title={'buy USDC to your Safe address using Stripe payment provider'}>
                {/* Buy USDC with our OnRamp kit */}
                <Button
                  startIcon={<WalletIcon />}
                  variant="contained"
                  onClick={async () => {
                    setShowStripeWidget(true)
                    await openStripeWidget()
                  }}
                  disabled={!chain?.isStripePaymentsEnabled}
                >
                  Buy USDC
                  {!chain?.isStripePaymentsEnabled ? ' (only in Mumbai chain)' : ''}
                </Button>
              </Tooltip>
            ) : (
              <Stack display="flex" flexDirection="column" alignItems="center" gap={1}>
                <Tooltip title={'close Stripe Widget'}>
                  <IconButton
                    size="small"
                    color="primary"
                    sx={{ alignSelf: 'flex-end' }}
                    onClick={async () => {
                      setShowStripeWidget(false)
                      await closeStripeWidget()
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                {/* Stripe root widget */}
                <div id="stripe-root"></div>
              </Stack>
            )}
          </ConnectedContainer>
        </Box>
      )}

      <Divider style={{ margin: '40px 0 30px 0' }} />
    </>
  )
}

export default OnRampKitDemo

const ConnectedContainer = styled(Box)<{
  theme?: Theme
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  border: 1px solid ${theme.palette.border.light};
  padding: 40px 32px;

  min-height: 265px;
`
)

