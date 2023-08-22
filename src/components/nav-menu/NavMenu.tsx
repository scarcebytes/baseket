import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import GelatoTaskStatusLabel from 'src/components/gelato-task-status-label/GelatoTaskStatusLabel'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'
import { useState } from 'react'
import Button from '@mui/material/Button'
import SafeInfo from 'src/components/safe-info/SafeInfo'
import ConnectedWalletLabel from 'src/components/connected-wallet-label/ConnectedWalletLabel'

type NavMenuProps = {
  setStep: (newStep: number) => void
  activeStep: number
}

const NavMenu = ({ setStep, activeStep }: NavMenuProps) => {
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

  return (
    <NavMenuContainer padding="16px" display="flex" flexDirection="column" gap={2} minWidth="368px">
      <MenuList>
        <NavItem onClick={() => setStep(0)} active={activeStep === 0}>
          <Typography fontWeight="700" fontSize="20px">
            Baseket
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(1)} active={activeStep === 1}>
          <OrderLabel fontSize="10px" fontWeight="700">
            01
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Setup your wallet
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(2)} active={activeStep === 2}>
          <OrderLabel fontSize="10px" fontWeight="700">
            02
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Fund your wallet
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(3)} active={activeStep === 3}>
          <OrderLabel fontSize="10px" fontWeight="700">
            03
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Setup your vault
          </Typography>
        </NavItem>
        <NavItem onClick={() => setStep(4)} active={activeStep === 4}>
          <OrderLabel fontSize="10px" fontWeight="700">
            04
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Trade in your wallet
          </Typography>
        </NavItem>
        <NavItem onClick={() => setStep(5)} active={activeStep === 5}>
          <OrderLabel fontSize="10px" fontWeight="700">
            05
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Feed
          </Typography>
        </NavItem>
        <NavItem onClick={() => setStep(6)} active={activeStep === 6}>
          <OrderLabel fontSize="10px" fontWeight="700">
            06
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Picnic
          </Typography>
        </NavItem>
      </MenuList>

      {!isAuthenticated ? (
        <ConnectedContainer
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Typography variant="h4" component="h3" fontWeight="700">
            To use the Transaction Hub you need to be authenticated
          </Typography>

          <Button variant="contained" onClick={loginWeb3Auth}>
            Connect
          </Button>
        </ConnectedContainer>
      ) : (
          <ConnectedContainer
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="flex-start"
            flexShrink={0}
          >
            <Typography fontWeight="700">Transaction Hub</Typography>

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
                  Check the status of your transaction.
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
      )}

          {!isAuthenticated ? (
        <ConnectedContainer
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Typography variant="h4" component="h3" fontWeight="700">
            To use the Relay Kit you need to be authenticated
          </Typography>

          <Button variant="contained" onClick={loginWeb3Auth}>
            Connect
          </Button>
        </ConnectedContainer>
      ) : (
        <Box display="flex" gap={3}>
          {/* safe Account */}
          <ConnectedContainer>
            <Typography fontWeight="700" marginTop="8px" marginBottom="22px">Vault</Typography>
            {/* Safe Info */}
            {safeSelected && <SafeInfo safeAddress={safeSelected} chainId={chainId} />}
            <Typography fontWeight="700" marginTop="8px" marginBottom="22px">Wallet</Typography>
            <ConnectedWalletLabel />
          </ConnectedContainer>

        </Box>
      )}
          


    </NavMenuContainer>
  )
}

export default NavMenu

const NavMenuContainer = styled(Box)<{
  theme?: Theme
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  
  border: 1px solid ${theme.palette.border.light};
`
)

const NavItem = styled(MenuItem)<{
  theme?: Theme
  active: boolean
}>(
  ({ theme, active }) => `
  
  border-radius: 10px;
  
  border: 1px solid ${active ? theme.palette.primary.dark : theme.palette.border.light};

  margin-bottom: 16px;
  padding: 16px 22px;
  display: flex
`
)

const OrderLabel = styled(Typography)<{
  theme?: Theme
}>(
  ({ theme }) => `
  border: 1px solid ${theme.palette.text.primary};
  border-radius: 4px;
  padding: 4px 6px;
  line-height: 12px;
`
)

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