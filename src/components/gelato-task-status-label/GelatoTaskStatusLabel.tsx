import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GelatoRelayPack } from '@safe-global/relay-kit'
import { useCallback, useEffect } from 'react'

import { TransactionStatusResponse } from '@gelatonetwork/relay-sdk'
import AddressLabel from 'src/components/address-label/AddressLabel'
import useApi from 'src/hooks/useApi'
import getChain from 'src/utils/getChain'
import { Alchemy, Network, TransactionReceipt } from "alchemy-sdk";
import { useState } from 'react'


type GelatoTaskStatusLabelProps = {
  gelatoTaskId: string
  chainId: string
  transactionHash?: string
  setTransactionHash: React.Dispatch<React.SetStateAction<string>>
}

const config = {
  apiKey: "OwudSsWQYkiNdDuLERkYh5sACy2ZkOJO",
  network: Network.MATIC_MAINNET,
};
const alchemy = new Alchemy(config);

const pollingTime = 1_000 // 4 seconds of polling time to update the Gelato task status

// TODO: rename this to TrackGelatoTaskStatus
const GelatoTaskStatusLabel = ({
  gelatoTaskId,
  chainId,
  transactionHash,
  setTransactionHash
}: GelatoTaskStatusLabelProps) => {
  const fetchGelatoTaskInfo = useCallback(
    async () => await new GelatoRelayPack().getTaskStatus(gelatoTaskId),
    [gelatoTaskId]
  )

  const { data: gelatoTaskInfo } = useApi(fetchGelatoTaskInfo, pollingTime)

  console.log('gelatoTaskInfo: ', gelatoTaskInfo)

  const chain = getChain(chainId)

  const isCancelled = gelatoTaskInfo?.taskState === 'Cancelled'
  const isSuccess = gelatoTaskInfo?.taskState === 'ExecSuccess'
  const isLoading = !isCancelled && !isSuccess

  const getTransactionReceipt = async (tx: string) => {
    let response = await alchemy.core.getTransactionReceipt(tx)
    if(response){
      setTransactionReceipt(response)
    }
  }

  const [transactionReceipt, setTransactionReceipt] = useState<TransactionReceipt>()


  useEffect(() => {
    if (gelatoTaskInfo?.transactionHash) {
      setTransactionHash(gelatoTaskInfo.transactionHash)
      //Call the method to fetch the transaction receipt of the tx
      getTransactionReceipt(gelatoTaskInfo.transactionHash)


    }
  }, [gelatoTaskInfo, setTransactionHash])

  return (
    <Container display="flex" flexDirection="column" gap={2} alignItems="flex-start">
      <Typography>Task details</Typography>

      {isLoading && <LinearProgress sx={{ alignSelf: 'stretch' }} />}

      {/* Status label */}
      {gelatoTaskInfo?.taskState ? (
        <StatusContainer taskStatus={gelatoTaskInfo.taskState}>
          <Typography variant="body2">
            {getGelatoTaskStatusLabel(gelatoTaskInfo.taskState)}
          </Typography>
        </StatusContainer>
      ) : (
        <Skeleton variant="text" width={100} height={20} />
      )}

      {/* Transaction hash */}
      {!isCancelled && (
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2">Transaction: </Typography>

          {transactionHash ? (
            <Link href={`${chain?.blockExplorerUrl}/tx/${transactionHash}`} target="_blank">
              <AddressLabel
                address={transactionHash}
                showBlockExplorerLink
                isTransactionAddress
                showCopyIntoClipboardButton={false}
              />
            </Link>
          ) : (
            <Skeleton variant="text" width={150} height={20} />
          )}
        </Stack>
      )}

      {/* Task extra info */}
      {gelatoTaskInfo?.lastCheckMessage && (
        <Typography variant="caption">{gelatoTaskInfo.lastCheckMessage}</Typography>
      )}
    </Container>
  )
}

export default GelatoTaskStatusLabel

const Container = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 12px;
`

const StatusContainer = styled('div')<{
  theme?: Theme
  taskStatus: TransactionStatusResponse['taskState']
}>(
  ({ theme, taskStatus }) => `
    margin-right: 8px;
    border-radius: 4px;
    padding: 4px 12px;
    background-color: ${getGelatoTaskStatusColor(taskStatus, theme)};
    color: ${theme.palette.getContrastText(getGelatoTaskStatusColor(taskStatus, theme))};
    `
)

const getGelatoTaskStatusColor = (
  taskStatus: TransactionStatusResponse['taskState'],
  theme: Theme
) => {
  const colors: Record<TransactionStatusResponse['taskState'], string> = {
    CheckPending: theme.palette.warning.light,
    WaitingForConfirmation: theme.palette.info.light,
    ExecPending: theme.palette.info.light,
    ExecSuccess: theme.palette.success.light,
    Cancelled: theme.palette.error.light,
    ExecReverted: theme.palette.error.light,
    Blacklisted: theme.palette.error.light,
    NotFound: theme.palette.error.light
  }

  return colors[taskStatus]
}

const getGelatoTaskStatusLabel = (taskStatus: TransactionStatusResponse['taskState']) => {
  const label: Record<TransactionStatusResponse['taskState'], string> = {
    CheckPending: 'Pending',
    WaitingForConfirmation: 'Waiting confirmations',
    ExecPending: 'Executing',
    ExecSuccess: 'Success',
    Cancelled: 'Cancelled',
    ExecReverted: 'Reverted',
    Blacklisted: 'Blacklisted',
    NotFound: 'Not Found'
  }

  return label[taskStatus]
}
