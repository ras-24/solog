import { useMemo } from "react";
import { BlogProvider } from "src/context/Blog";
import { Router } from "src/router";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "./App.css";

export const App = () => {
  const endpoint = "https://omniscient-virulent-arm.solana-devnet.quiknode.pro/295ac518ec29a4047335d3a2b02cca7c156eb99a";

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
