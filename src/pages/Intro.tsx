import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import ReactFlow from 'reactflow';
import ChainSelector from 'src/components/chain-selector/ChainSelector'

type IntroProps = {
  setStep: (newStep: number) => void
}

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '👛 Wallet' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '🔒 Vault' } },
  { id: '3', position: { x: 0, y: 200 }, data: { label: '👴 Inheritance' } },
  { id: '4', position: { x: 150, y: 200 }, data: { label: '🏦 Piggy-Bank' } },
  { id: '5', position: { x: 300, y: 200 }, data: { label: '🥅 Goal' } },
  { id: '6', position: { x: 100, y: 300 }, data: { label: '₿ Bitcoin' } },
  { id: '7', position: { x: 300, y: 300 }, data: { label: '💵 Dollars' } },
  { id: '8', position: { x: 500, y: 300 }, data: { label: '🪙 Ethereum' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' },{ id: 'e2-3', source: '2', target: '3' },{ id: 'e2-4', source: '2', target: '4' },{ id: 'e2-5', source: '2', target: '5' },{ id: 'e3-6', source: '3', target: '6' },{ id: 'e3-7', source: '3', target: '7' },{ id: 'e3-8', source: '3', target: '8' }];


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
      🧺 Baseket 🧺
      </Typography>

      <div style={{ width: '500vw', height: '40vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>

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
