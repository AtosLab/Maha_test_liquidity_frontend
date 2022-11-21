import { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import { DappContext } from "providers/provider.wallet";

const useWalletConnect = () => {
  const { walletAddress, setWalletAddress, networkId, setNetworkId, web3, setWeb3 } = useContext(DappContext);

  const [walletConnected, setWalletConnected] = useState(false);

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions: {},
  });

  const connectWallet = async () => {
    await web3Modal.clearCachedProvider();
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const walletConnected = _checkNetworkID(networkId);
    provider.on("accountsChanged", (accounts: any) => {});
    provider.on("chainChanged", (chainId: any) => {});
    provider.on("networkChanged", (networkId: any) => {
      setNetworkId(networkId);
    });
    window.localStorage.setItem("wallet_state", "connected");
    _initWalletInfor(web3, accounts[0], networkId, walletConnected);
  };
  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    window.localStorage.removeItem("wallet_state");
    _initWalletInfor(undefined, undefined, undefined, false);
  };

  const _initWalletInfor = (web3: any, address: any, networkId: any, connected: any) => {
    setWeb3(web3);
    setWalletAddress(address);
    setNetworkId(networkId);
    setWalletConnected(connected);
  };
  const _checkNetworkID = (networkId: any) => {
    return (
      // networkId === 1 ||
      // networkId === '1' ||
      networkId === 5 || networkId === "5"
    );
  };

  useEffect(() => {
    if (_checkNetworkID(networkId) === true) {
      if (!walletConnected && walletAddress) {
        setWalletConnected(true);
      }
    } else {
      if (walletAddress) {
        console.log("invalid network.\nPlease change the network.");
        if (walletConnected) {
          setWalletConnected(false);
        }
      }
    }
  }, [networkId]);

  useEffect(() => {
    const wallet_cookie = window.localStorage.getItem("wallet_state");
    if (wallet_cookie) connectWallet();
  }, []);

  return {
    walletConnected,
    walletAddress,
    networkId,
    connectWallet,
    disconnectWallet,
    web3,
  };
};

export default useWalletConnect;
