import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Launcher,
  Window,
  useLaunch,
  useSetWallet,
  useIsOpen,
} from "@relaycc/receiver";
import {
  ConnectButton,
  RainbowKitProvider,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  WagmiConfig,
  configureChains,
  createClient,
  defaultChains,
  useSigner,
} from "wagmi";
import "@rainbow-me/rainbowkit/dist/index.css";
const alchemyKey = "kmMb00nhQ0SWModX6lJLjXy_pVtiQnjx";

const { chains, provider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: alchemyKey }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "Relay Receiver Example App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

function App() {
  const launch = useLaunch();
  const isOpen = useIsOpen();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="full-flex-centered">
          <h1 className="header">Relay Receiver Example App</h1>
          <h1>First connect a wallet</h1>
          <ConnectButton />
          <h1>Then launch receiver</h1>
          {isOpen || (
            <button className="launch-receiver" onClick={() => launch()}>
              Launch Receiver
            </button>
          )}
          {isOpen && (
            <div className="receiver-is-open">Receiver Window is Open</div>
          )}
          <h1>Then follow the instructions in the popup 🎉</h1>
          <WalletExample />
          <Window />
          <Launcher />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

function WalletExample() {
  const { data: wallet } = useSigner();
  const setWallet = useSetWallet();

  useEffect(() => {
    setWallet(wallet || null);
  }, [wallet, setWallet]);

  return <></>;
}

export default App;
