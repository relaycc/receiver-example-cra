import React from "react";
import "./App.css";
import { Launcher, Window, useLaunch, useIsOpen } from "@relaycc/receiver";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicExample />} />
      <Route path="dynamic" element={<DynamicExample />} />
    </Routes>
  );
}

function BasicExample() {
  const launch = useLaunch();
  const isOpen = useIsOpen();

  return (
    <div className="full-flex-centered">
      <h1 className="header">Relay Receiver Example App</h1>
      <h1>First connect a wallet</h1>
      <ConnectButton />
      <h1>Then launch receiver</h1>
      {isOpen || (
        <button
          className="launch-receiver hover-scale"
          onClick={() => launch()}
        >
          Launch Receiver
        </button>
      )}
      {isOpen && (
        <div className="receiver-is-open">Receiver Window is Open</div>
      )}
      <h1>Then follow the instructions in the popup 🎉</h1>
      <Window />
      <Launcher />
    </div>
  );
}

function DynamicExample() {
  const launch = useLaunch();

  return (
    <div className="full-flex-centered">
      <h1>You can turn any component into a Receiver Launcher</h1>
      <ConnectButton />
      <h1>and send the user straight into a conversation!</h1>
      <button
        className="launch-receiver hover-scale"
        onClick={() => launch("0x0cb27e883E207905AD2A94F9B6eF0C7A99223C37")}
      >
        Talk to the Relay Founder
      </button>
      <h1>You can message anyone with an ETH account</h1>
      <button
        className="launch-receiver hover-scale"
        onClick={() => launch("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045")}
      >
        Even Vitalik!
      </button>
      <h2>(Once he's joined the network 🎉)</h2>
      <Window />
    </div>
  );
}

export default App;
