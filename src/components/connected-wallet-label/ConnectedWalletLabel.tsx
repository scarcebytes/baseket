import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { Theme } from '@mui/material'
import LogoutIcon from '@mui/icons-material/LogoutRounded'
import AmountLabel from 'src/components/amount-label/AmountLabel'

import AddressLabel from 'src/components/address-label/AddressLabel'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'
import authLogo from 'src/assets/web3Auth_logo.png'
import { useState } from 'react'
import { utils } from 'ethers'

import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "OwudSsWQYkiNdDuLERkYh5sACy2ZkOJO",
  network: Network.MATIC_MAINNET,
};
const alchemy = new Alchemy(config);

const getAddressBalances = async (address: string) => {
  let usdcContract = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
  let response = await alchemy.core.getTokenBalances(address, [usdcContract])
}

// TODO: rename this to connected owner?
function ConnectedWalletLabel() {
  const { isAuthenticated, ownerAddress, chain, walletBalance, walletUSDCBalance, walletNFTs, logoutWeb3Auth } = useAccountAbstraction()
  const [ownerAddressUSDCBalance, setOwnerAddressUSDCBalance] = useState<String>()

  if (!isAuthenticated) {
    // TODO: ADD NO CONNECTED WALLET LABEL
    return null
  }

  if (isAuthenticated && ownerAddress){


  }

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <StyledImg src={authLogo} alt="connected Wallet logo" height={'50px'} />

        <Typography variant="body2">
          {ownerAddress && <AddressLabel address={ownerAddress} showBlockExplorerLink />}
        </Typography>
      </Stack>

      {/* logout button */}
      <Tooltip title="Logout">
        <LogoutIconButton onClick={logoutWeb3Auth}>
          <LogoutIcon fontSize="small" />
        </LogoutIconButton>
      </Tooltip>

      <AmountContainer>
            {/* Safe Balance */}
            <Typography fontWeight="700">
              <AmountLabel
                amount={utils.formatEther(walletBalance || '0')}
                tokenSymbol={chain?.token || ''}
              />
            </Typography>
            <Typography fontWeight="700">
            <AmountLabel
                amount={utils.formatUnits(walletUSDCBalance || '0',6)}
                tokenSymbol={'USDC'}
              />
            </Typography>
            <Typography fontWeight="700">
            <AmountLabel
                amount={utils.formatUnits(walletNFTs || '0',0)}
                tokenSymbol={'NFTs'}
              />
            </Typography>
          </AmountContainer>
      
    </Stack>
    
  )
}

export default ConnectedWalletLabel

const StyledImg = styled('img')`
  border-radius: 50%;
`

const LogoutIconButton = styled(IconButton)<{
  theme?: Theme
}>(
  ({ theme }) => `
  border: 1px solid ${theme.palette.border.main};
`
)

const AmountContainer = styled('div')<{
  theme?: Theme
}>(
  ({ theme, onClick }) => `
  border-radius: 6px;
  background-color: ${theme.palette.background.light};
  padding: 0px 8px;
  cursor: ${!!onClick ? 'pointer' : 'initial'};
  `
)