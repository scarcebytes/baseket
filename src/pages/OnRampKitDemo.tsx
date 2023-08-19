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
    openStripeWidget,
    closeStripeWidget,
    safeSelected,
    chain,
    chainId,
    isAuthenticated,
    web3Provider,
    loginWeb3Auth
  } = useAccountAbstraction()

  const [showStripeWidget, setShowStripeWidget] = useState<boolean>(false)

  const sendUSDCFromWallettoSafe = async () => {
 
    if (web3Provider) {
      const signer = web3Provider.getSigner()

      const tokenAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
      const tokenAbi = ["function transfer(address _to, uint256 _value) public returns (bool success)"];
      const usdc = new ethers.Contract(tokenAddress, tokenAbi, signer);
      const tx = await usdc.transfer("0x986Ae64d979287601DC8A81Ed989f11563775460", ethers.utils.parseUnits("1", 6));    
      console.log(tx)

    }
    
    
  }


  const sendUSDCFromSafetoWallet = async () => {
 
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
      
      const receivers: Receiver[] = [{address: "0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049"}]


      const tokenAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
      const tokenAbi = ["function transfer(address _to, uint256 _value) public returns (bool success)"];

      
      const usdc = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await usdc.populateTransaction["transfer(address,uint256)"]("0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049",ethers.utils.parseUnits("1", 6))
      console.log(tx)

      const safeTransactionData: MetaTransactionData = {
        to: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
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

  const burnNFTRelay = async () => {
 
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
      
      const tokenAddress = '0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205';
      const tokenAbi = ["function burn(uint256 tokenId)"];

      
      const nft = new ethers.Contract(tokenAddress, tokenAbi);
      console.log(nft)
      const tx = await nft.populateTransaction["burn(uint256)"](1)
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: "0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205",
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

    }
    
    
  }

  const createAccountRelay = async () => {
 
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
      
      const tokenAddress = '0x02101dfB77FDE026414827Fdc604ddAF224F0921';
      const tokenAbi = ["function createAccount(address implementation, uint256 chainId, address tokenContract, uint256 tokenId, uint256 salt, bytes calldata initData) external returns (address)"];
      
      const registry = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await registry.populateTransaction["createAccount(address,uint256,address,uint256,uint256,bytes)"]("0x2d25602551487c3f3354dd80d76d54383a243358",137,"0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205",2,0,"0x")
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: "0x02101dfB77FDE026414827Fdc604ddAF224F0921",
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

    }
    
    
  }


  const transferNFTRelay = async () => {
 
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
      
      const tokenAddress = '0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205';
      const tokenAbi = ["function safeTransferFrom(address from, address to, uint256 tokenId)"];

      
      const nft = new ethers.Contract(tokenAddress, tokenAbi);
      console.log(nft)
      const tx = await nft.populateTransaction["safeTransferFrom(address,address,uint256)"]("0x986ae64d979287601dc8a81ed989f11563775460","0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049",2)
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: "0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205",
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

    }
    
    
  }


  const mintWithRelay = async () => {
 
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
      
      const tokenAddress = '0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205';
      const tokenAbi = ["function safeMint(address to, uint256 tokenId)"];

      
      const nft = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await nft.populateTransaction["safeMint(address,uint256)"]("0x986ae64d979287601dc8a81ed989f11563775460",2)
      console.log(tx)

      const safeTransactionData: MetaTransactionData[] = [{
        to: "0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205",
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

    }
    
    
  }


  const sendUSDCFromSafetoWalletRelay = async () => {
 
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
      
      const receivers: Receiver[] = [{address: "0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049"}]


      const tokenAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
      const tokenAbi = ["function transfer(address _to, uint256 _value) public returns (bool success)"];

      
      const usdc = new ethers.Contract(tokenAddress, tokenAbi);
      const tx = await usdc.populateTransaction["transfer(address,uint256)"]("0x0Ec828E23c31e4b7EbE47be933bfa9a4F2503049",ethers.utils.parseUnits("1", 6))
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
      isSponsored: true,
      gasLimit: '600000', // in this alfa version we need to manually set the gas limit
      gasToken: ethers.constants.AddressZero // native token
    }

    const gelatoTaskId = await safeAccountAbstraction.relayTransaction(safeTransactionData, options)
    console.log(gelatoTaskId)

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
              <Button variant="contained" onClick={sendUSDCFromWallettoSafeRelay}>
            Send 1 USDC from Wallet to Safe Relayed
          </Button>
              <Button variant="contained" onClick={sendUSDCFromSafetoWalletRelay}>
            Send 1 USDC from Safe to Wallet Relayed
          </Button>
              <Button variant="contained" onClick={sendUSDCFromSafetoWallet}>
            Send 1 USDC from Safe to Wallet 
          </Button>
          <Button variant="contained" onClick={sendUSDCFromWallettoSafe}>
            Send 1 USDC from Wallet to Safe 
          </Button>
          <Button variant="contained" onClick={mintWithRelay}>
            Mint to Safe 
          </Button>
          <Button variant="contained" onClick={transferNFTRelay}>
            Transfer NFT from Safe to Wallet
          </Button>
          <Button variant="contained" onClick={burnNFTRelay}>
            Burn NFT
          </Button>
          <Button variant="contained" onClick={createAccountRelay}>
            Create Account
          </Button>
            </Typography>

            {/* Safe Info */}
            {safeSelected && <SafeInfo safeAddress={safeSelected} chainId={chainId} />}
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

