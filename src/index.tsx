import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useSetWallet } from "@relaycc/receiver";
import {
  WagmiConfig,
  configureChains,
  createClient,
  defaultChains,
  useSigner,
  chain,
} from "wagmi";
import { Wallet } from "ethers";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/dist/index.css";

const alchemyKey = "kmMb00nhQ0SWModX6lJLjXy_pVtiQnjx";

!defaultChains.includes(chain.polygon) && defaultChains.push(chain.polygon);
!defaultChains.includes(chain.optimism) && defaultChains.push(chain.optimism);
!defaultChains.includes(chain.arbitrum) && defaultChains.push(chain.arbitrum);

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

// WARNING: DO NOT USE YOUR PERSONAL WALLET'S PRIVATE KEY HERE. USE A BURNER
// WALLET OR TEST-SPECIFIC WALLET INSTEAD. SEE HERE FOR ONE OPTION TO CREATE
// A BURNER WALLET: https://docs.ethers.io/v5/api/signer/#Wallet-createRandom
const devWallet =
  process.env.NODE_ENV === "development" &&
  typeof process.env.REACT_APP_TEST_PK === "string"
    ? new Wallet(process.env.REACT_APP_TEST_PK as string)
    : undefined;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <App />
          <SetWalletExample />
        </RainbowKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>
);

function SetWalletExample() {
  const { data: wallet } = useSigner();
  const setWallet = useSetWallet();
  console.log(wallet);

  useEffect(() => {
    setWallet(devWallet || wallet || null);
  }, [wallet, setWallet]);

  return <></>;
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
