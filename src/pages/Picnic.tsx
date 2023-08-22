/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-nocheck
import styled from '@emotion/styled'
import { Button, Card, Theme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'
import { SwapWidget } from '@uniswap/widgets'
import {Theme as UniswapTheme} from '@uniswap/widgets'
import { useEffect, useState } from "react";
import Link from '@mui/material/Link'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { init, useQuery } from "@airstack/airstack-react";
import { Asset } from "@airstack/airstack-react";
import TokenCard from "../components/Token";
import { CodeBlock, atomOneDark } from 'react-code-blocks'
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";



init("c6889b6b670e4cfbba45f1e3cc04476d");


const DisplayNFTs = (address: string) => {
  const query = `query GetAllNFTsOwnedByUser {
    TokenBalances(
      input: {filter: {owner: {_in: ["0x986Ae64d979287601DC8A81Ed989f11563775460"]}, tokenType: {_in: [ERC1155, ERC721]}}, blockchain: polygon, limit: 50}
    ) {
      TokenBalance {
        owner {
          addresses
        }
        tokenNfts {
          address
          tokenId
          blockchain
          contentValue {
            image {
              original
            }
          }
          type
          lastTransferHash
          erc6551Accounts(
            input: {blockchain: ethereum, filter: {address: {_in: "0x986Ae64d979287601DC8A81Ed989f11563775460"}}}
          ) {
            id
            tokenAddress
            tokenId
            creationTransactionHash
          }
          metaData {
            name
            description
          }
        }
      }
    }
  }
  `;

  

  const [userNFTs, setUserNFTs] = useState();

  const { data, loading } = useQuery(query);

  useEffect(() => {
    if (data) {
      setUserNFTs(data.TokenBalances.TokenBalance);
    }
  }, [data, userNFTs]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-8 ">
          {userNFTs &&
            userNFTs.map((nft, i) => {
              return (
                <div key={i}>
                  {nft.tokenNfts.contentValue.image !== null && (
                    <Card sx={{ maxWidth: 400 }}>
                      <Link href={`/nft/${nft.tokenNfts.address}`}>
                        <div className="flex flex-col gap-2">
                          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-md">
                            <Typography>{nft.tokenNfts.address}</Typography>
                              <Box
                              component="img"
                              sx={{
                                height: 380,
                                width: 380,
                              }}
                              alt={nft.tokenNfts.address}
                              src={nft.tokenNfts.contentValue.image.original}
                            />
                          </div>
                          <span className="font-bold">
                            {nft.tokenNfts.metaData.name}
                          </span>
                        </div>
                      </Link>
                      <Button>Action 1</Button>
                      <Button>Action 2</Button>
                      <Button>Action 3</Button>    
                    </Card>              
                  )}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};



const Picnic = () => {
  const {
    safeSelected,
    chain,
    chainId,
    isAuthenticated,
    loginWeb3Auth,
    ownerAddress,
    web3Provider
  } = useAccountAbstraction()
 
  const theme: UniswapTheme = {
    primary: '#FFF',
    secondary: '#A9A9A9',
    interactive: '#000',
    container: '#4E4E5A',
    module: '#222633',
    accent: '#71FF98',
    outline: '#CC1',
    dialog: '#000',
    fontFamily: 'Josefin Sans',
  }
//    <DisplayNFTs address={ownerAddress} />

  return (
    <>
      <Typography variant="h2" component="h1">
        Picnic
      </Typography>



      <div className="flex items-center justify-center gap-8">
        <TokenCard amount={12} token={"ABC"} />
      </div>

      {/* TODO: create a component for this? */}
      <CodeContainer>
        <CodeBlock
          text={"text"}
          language={'javascript'}
          startingLineNumber={0}
          theme={atomOneDark}
        />
      </CodeContainer>


    </>
  )
}

export default Picnic

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


const CodeContainer = styled(Box)<{
  theme?: Theme
}>(
  ({ theme }) => `
  border-radius: 10px;
  border: 1px solid ${theme.palette.border.light};
  padding: 16px;
`
)