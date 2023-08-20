import Chain from 'src/models/chain'

export const polygonChain: Chain = {
  id: '0x89',
  chainNumber: 137,
  token: 'matic',
  shortName: 'matic',
  label: 'Polygon',
  rpcUrl: 'https://polygon-rpc.com',
  blockExplorerUrl: 'https://polygonscan.com',
  color: '#8248E5',
  transactionServiceUrl: 'https://safe-transaction-polygon.safe.global',
  usdcAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  nftAddress: "0x1e936dcb23fbb9246ff469732f6f6ee7a4cbc205",
  tbaImplementationAddress: "0x2d25602551487c3f3354dd80d76d54383a243358",
  tbaRegistryAddress: '0x02101dfB77FDE026414827Fdc604ddAF224F0921',
  isStripePaymentsEnabled: false
}

const chains: Chain[] = [polygonChain]

export const initialChain = polygonChain

export default chains
