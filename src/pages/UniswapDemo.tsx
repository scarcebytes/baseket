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
import LexChat from "react-lex-plus";


import ReactFlow from 'reactflow';

import 'reactflow/dist/style.css';

import '@uniswap/widgets/fonts.css'

init("c6889b6b670e4cfbba45f1e3cc04476d");

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
        <SwapWidget width="100%" brandedFooter={false} provider={web3Provider} />
     </div>

     <LexChat
      botName="OrderFlowers"
      IdentityPoolId="us-east-1:7292b8c0-56f1-4441-b2a6-xxxxxxxxxxxx"
      placeholder="Placeholder text"
      backgroundColor="#FFFFFF"
      height={430}
      region="us-east-1"
      headerText="Chat with our awesome bot"
      headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
      greeting={
        "Hello, how can I help? You can say things like 'help' to get more info"
      }
    />;

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
