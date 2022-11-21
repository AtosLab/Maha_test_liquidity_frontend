import React, { createContext, useEffect, useState } from "react";

export const DappContext = createContext<any>(null);

const DappContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [web3, setWeb3] = useState<any>();
  const [networkId, setNetworkId] = useState<any>();

  window.ethereum.enable();
  window.web3 = null;

  useEffect(() => {
    window.web3 = web3;
  }, [web3]);

  return (
    <DappContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        networkId,
        setNetworkId,
        web3,
        setWeb3,
      }}
    >
      {children}
    </DappContext.Provider>
  );
};

export default DappContextProvider;
