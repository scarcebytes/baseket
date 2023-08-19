import { useCallback, useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { Skeleton, Theme } from '@mui/material'
import styled from '@emotion/styled'
import { providers, utils } from 'ethers'

import AddressLabel from 'src/components/address-label/AddressLabel'
import AmountLabel from 'src/components/amount-label/AmountLabel'
import getSafeInfo from 'src/api/getSafeInfo'
import useApi from 'src/hooks/useApi'
import safeLogoLight from 'src/assets/safe-info-logo-light.svg'
import safeLogoDark from 'src/assets/safe-info-logo-dark.svg'
import usePolling from 'src/hooks/usePolling'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'
import { useTheme } from 'src/store/themeContext'

type SafeInfoProps = {
  safeAddress: string
  chainId: string
}

// TODO: ADD USDC LABEL
// TODO: ADD CHAIN LABEL

function SafeWallet({ safeAddress, chainId }: SafeInfoProps) {
  const { web3Provider, chain, safeBalance } = useAccountAbstraction()

  const [isDeployed, setIsDeployed] = useState<boolean>(false)
  const [isDeployLoading, setIsDeployLoading] = useState<boolean>(true)

  const { isDarkTheme } = useTheme()

  // detect if the safe is deployed with polling
  const detectSafeIsDeployed = useCallback(async () => {
    const isDeployed = await isContractAddress(safeAddress, web3Provider)

    setIsDeployed(isDeployed)
    setIsDeployLoading(false)
  }, [web3Provider, safeAddress])

  usePolling(detectSafeIsDeployed)

  // safe info from Safe transaction service (used to know the threshold & owners of the Safe if its deployed)
  const fetchInfo = useCallback(
    (signal: AbortSignal) => getSafeInfo(safeAddress, chainId, { signal }),
    [safeAddress, chainId]
  )

  const { data: safeInfo, isLoading: isGetSafeInfoLoading } = useApi(fetchInfo)

  const owners = safeInfo?.owners.length || 1
  const threshold = safeInfo?.threshold || 1
  const isLoading = isDeployLoading || isGetSafeInfoLoading

  return (
    <Stack direction="row" spacing={2}>
        Safe Wallet Details
    </Stack>
  )
}

export default SafeWallet

const SafeSettingsLabel = styled('div')<{
  theme?: Theme
}>(
  ({ theme }) => `
  position: absolute;
  top: -6px;
  right: -4px;
  border-radius: 50%;
  background-color: ${theme.palette.secondary.light};
  color: ${theme.palette.getContrastText(theme.palette.secondary.light)};
  padding: 5px 6px;
`
)

const CreationPendingLabel = styled('div')<{
  theme?: Theme
}>(
  ({ theme }) => `
  border-radius: 4px;
  background-color: ${theme.palette.info.light};
  color: ${theme.palette.getContrastText(theme.palette.secondary.light)}; 
  padding: 0px 10px;
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

// TODO: create a util for this?
const isContractAddress = async (
  address: string,
  provider?: providers.Web3Provider
): Promise<boolean> => {
  try {
    const code = await provider?.getCode(address)

    return code !== '0x'
  } catch (error) {
    return false
  }
}
