import { useEffect, useState } from "react";
import { BigNumber as BN } from "@ethersproject/bignumber";
import useWalletConnect from "common/hooks/useWalletConnect";
import { Container, ContainerFluid, Flex, Input, Link } from "components/compBase";

import { TEST_LIQUIDITY_ADDRESS } from "common/constants";
import TEST_LIQUIDITY_ABI from "common/abi/testLiquidity.json";

const TestPage = () => {
  const { walletConnected, walletAddress, web3, connectWallet, disconnectWallet } = useWalletConnect();
  const [amountEth, setAmountEth] = useState(0);
  const [tokenAddress, setTokenAddress] = useState("0x37D09eE52354c215244d387b6C0f08eA20DE35C1");
  const [result, setResult] = useState("");
  const [balanceEth, setBalanceEth] = useState<any>("loading...");

  const _fetchData = async () => {
    if (walletConnected && web3) {
      const _balance = await new web3.eth.getBalance(walletAddress);
      // setBalanceEth(_balance);
      setBalanceEth(Math.round(_balance / Math.pow(10, 14)) / Math.pow(10, 4));
    }
  };

  const testLiquidity = async () => {
    if (walletConnected && web3) {
      console.log(BN.from(amountEth).mul(BN.from(10).pow(BN.from(17))))
      setResult(
        await new web3.eth.Contract(TEST_LIQUIDITY_ABI, TEST_LIQUIDITY_ADDRESS).methods.buyback(tokenAddress).send({
          value: BN.from(amountEth).mul(BN.from(10).pow(BN.from(17))),
          from: walletAddress,
        })
      );
    }
  };

  useEffect(() => {
    _fetchData();
  }, [walletConnected]);

  return (
    <ContainerFluid py={"20px"} gridGap={"20px"}>
      <Container col>
        <Flex>
          <Link
            ml={"auto"}
            bg={"rgb(51 65 85)"}
            p={"10px 20px"}
            borderRadius={"4px"}
            color={"white"}
            onClick={walletConnected ? disconnectWallet : connectWallet}
          >
            {walletConnected ? `(${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}) Disconnect` : `Connect`}
          </Link>
        </Flex>
        <Flex mt={"100px"} col alignCenter justifyCenter gridGap={"8px"}>
          <Input
            bg={"#0005"}
            border={"none"}
            borderRadius={"4px"}
            p={"10px 20px"}
            color={"white"}
            type={"number"}
            placeholder={"input ETH amount"}
            value={amountEth}
            onChange={(e: any) => setAmountEth(e.target.value)}
          />
          <Input
            bg={"#0005"}
            border={"none"}
            borderRadius={"4px"}
            p={"10px 20px"}
            color={"white"}
            type={"text"}
            placeholder={"input Token address"}
            value={tokenAddress}
            onChange={(e: any) => setTokenAddress(e.target.value)}
          />
          <Link bg={"rgb(51 65 85)"} p={"6px 20px"} borderRadius={"4px"} color={"white"} onClick={testLiquidity}>
            Run
          </Link>
        </Flex>
        <Flex>balance : {balanceEth}</Flex>
        {result && <Flex>liquidity : {result}</Flex>}
      </Container>
    </ContainerFluid>
  );
};

export default TestPage;
