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


import ReactFlow from 'reactflow';

import 'reactflow/dist/style.css';

import '@uniswap/widgets/fonts.css'

init("c6889b6b670e4cfbba45f1e3cc04476d");

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Wallet' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: 'Vault' } },
    { id: '3', position: { x: 0, y: 200 }, data: { label: 'Inheritance' } },
    { id: '4', position: { x: 150, y: 200 }, data: { label: 'Piggy-Bank' } },
    { id: '5', position: { x: 300, y: 200 }, data: { label: 'Goal' } },
    { id: '6', position: { x: 100, y: 300 }, data: { label: 'Bitcoin' } },
    { id: '7', position: { x: 300, y: 300 }, data: { label: 'Dollars' } },
    { id: '8', position: { x: 500, y: 300 }, data: { label: 'Ethereum' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' },{ id: 'e2-3', source: '2', target: '3' },{ id: 'e2-4', source: '2', target: '4' },{ id: 'e2-5', source: '2', target: '5' },{ id: 'e3-6', source: '3', target: '6' },{ id: 'e3-7', source: '3', target: '7' },{ id: 'e3-8', source: '3', target: '8' }];
  

const DisplayNFTs = () => {
  const query = `query GetAllNFTsOwnedByUser {
    TokenBalances(input: {filter: {owner: {_in: ["5256.eth"]}, tokenType: {_in: [ERC1155, ERC721]}}, blockchain: ethereum, limit: 2}) {
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
                            <Box
                            component="img"
                            sx={{
                              height: 233,
                              width: 350,
                              maxHeight: { xs: 233, md: 167 },
                              maxWidth: { xs: 350, md: 250 },
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
        Picnic
      </Typography>


    <DisplayNFTs />

      <div className="flex items-center justify-center gap-8">
        <TokenCard amount={12} token={"ABC"} />
      </div>

      <div style={{ width: '10vw', height: '10vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>

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
