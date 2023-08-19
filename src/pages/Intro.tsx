import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import styled from '@emotion/styled'
import { Theme } from '@mui/material'

import ChainSelector from 'src/components/chain-selector/ChainSelector'

type IntroProps = {
  setStep: (newStep: number) => void
}

const Intro = ({ setStep }: IntroProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      paddingTop="72px"
      paddingLeft="100px"
    >

      <Typography variant="h1" fontSize="64px" lineHeight="76px">
        Baseket
      </Typography>

      <Typography variant="body1">
      An onchain basket of monetary memories and goals as piggy-banks, allowances, gifts or inheritance
      </Typography>

      {/* Kit list */}
      <Box display="flex" gap={2} marginTop="36px">
        <Box display="flex" gap={1}>
          <OrderLabel fontSize="10px" fontWeight="700">
            01
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px">
            Setup your wallet
          </Typography>
        </Box>

        <Box display="flex" gap={1}>
          <OrderLabel fontSize="10px" fontWeight="700">
            02
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px">
           Fund your wallet
          </Typography>
        </Box>

        <Box display="flex" gap={1}>
          <OrderLabel fontSize="10px" fontWeight="700">
            03
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px">
            Setup your vault
          </Typography>
        </Box>
        <Box display="flex" gap={1}>
          <OrderLabel fontSize="10px" fontWeight="700">
            04
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px">
            Trade in your vault
          </Typography>
        </Box>
        <Box display="flex" gap={1}>
          <OrderLabel fontSize="10px" fontWeight="700">
            05
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px">
            Feed
          </Typography>
        </Box>
        <Box display="flex" gap={1}>
          <OrderLabel fontSize="10px" fontWeight="700">
            06
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px">
            Picnic
          </Typography>
        </Box>
      </Box>

      <Divider style={{ alignSelf: 'stretch', margin: '42px 0' }} />

      <Box display="flex" gap={2} marginTop="32px" alignItems="center">
        <ChainSelector />

        <Button variant="contained" onClick={() => setStep(1)}>
          Start your baseket now
        </Button>
      </Box>
    </Box>
  )
}

export default Intro

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
