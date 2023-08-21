# baseket


polygon deploy 1:  deployed at 0x0130c66eD972F1A81AeE851281356A547F9ce257 with 3381353 gas


const processSignature = async(amount: any, from: string, to: string) => {

  if (web3Provider) {
    const signer = web3Provider.getSigner()
  
    // timestamp for expiry of this signature
    const valueBefore = Math.floor(Date.now() / 1000) + 3600;
    // random nonce.
    //const nonce = Web3.utils.randomHex(32);
    const nonce = 0;

    // message data
    let data = {
      types: {
        TransferWithAuthorization: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "value", type: "uint256" },
          { name: "validAfter", type: "uint256" },
          { name: "validBefore", type: "uint256" },
          { name: "nonce", type: "bytes32" },
        ],
      },
      // this helps the user validate the token
      domain: {
        name: "USD Coin",
        version: "2",
        chainId: 5,
        // the contract address of USDC
        verifyingContract: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      },
      primaryType: "TransferWithAuthorization",
      message: {
        from: from,
        to: to,
        value: Math.pow(10, 6),
        validAfter: 0,
        validBefore: valueBefore, // Valid for an hour
        nonce: nonce,
      },
    };

    const signature = await signer._signTypedData(data.domain, data.types, data.message);

    // v, r and s from signature
    const v = "0x" + signature.slice(130, 132);
    const r = signature.slice(0, 66);
    const s = "0x" + signature.slice(66, 130);
    return data;
  }
}