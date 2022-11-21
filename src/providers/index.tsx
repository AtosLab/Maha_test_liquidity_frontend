import React from "react";
import ThemesProvider from "./provider.theme";
import StoreProvider from "./provider.store";
import DappContextProvider from "./provider.wallet";

const AllProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemesProvider>
        <DappContextProvider>{children}</DappContextProvider>
      </ThemesProvider>
    </StoreProvider>
  );
};

export default AllProvider;
