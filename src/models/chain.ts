type Chain = {
  id: string
  chainNumber: number,
  token: string
  rpcUrl: string
  shortName: string
  label: string
  color?: string
  icon?: string
  blockExplorerUrl: string
  usdcAddress: string
  nftAddress: string
  tbaImplementationAddress: string
  tbaRegistryAddress: string
  transactionServiceUrl?: string
  isStripePaymentsEnabled: boolean // only available in Mumbai chain
  faucetUrl?: string
}

export default Chain
