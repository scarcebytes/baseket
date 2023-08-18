/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-nocheck
import styled from '@emotion/styled'
import { Theme } from '@mui/material'
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
import Contact from "../components/Contact";
import Image from "material-ui-image";


import '@uniswap/widgets/fonts.css'

init("c6889b6b670e4cfbba45f1e3cc04476d");

const DisplayNFTs = () => {
  const query = `query GetAllNFTsOwnedByUser {
    TokenBalances(input: {filter: {owner: {_in: ["5256.eth"]}, tokenType: {_in: [ERC1155, ERC721]}}, blockchain: ethereum, limit: 10}) {
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
          metaData {
            name
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
                    <Link href={`/nft/${nft.tokenNfts.address}`}>
                      <div className="flex flex-col gap-2">
                        <div className="relative aspect-[5/6] w-full overflow-hidden rounded-md">
                          <Typography>{nft.tokenNfts.address}</Typography>
                          <Image
                            src={nft.tokenNfts.contentValue.image.original}
                            alt={nft.tokenNfts.address}
                            fill
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="font-bold">
                          {nft.tokenNfts.metaData.name}
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};


const UniswapDemo = () => {
  const {
    safeSelected,
    chain,
    chainId,
    isAuthenticated,
    loginWeb3Auth,
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

  return (
    <>
      <Typography variant="h2" component="h1">
        Uniswap
      </Typography>
      <div className="Uniswap">
        <SwapWidget width="100%" brandedFooter={false} theme={theme} provider={web3Provider} />
     </div>

     <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Secondary</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>Success</TimelineContent>
      </TimelineItem>
    </Timeline>

    <Asset
        chain="ethereum"
        address="0x1c9324a7765256d46158185108f37260aa711266"
        tokenId="1"
        loading={<div>Loading...</div>}
        error={<div>Error loading asset.</div>}
        imgProps={{alt: "my asset"}}
        preset="medium"
      />

    <DisplayNFTs />

    </>
  )
}

export default UniswapDemo

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
