import React, { useState } from "react";
import "./App.css";
import {
  Launcher,
  useLaunch,
  useIsOpen,
  Modal,
  Intercom,
  Window,
} from "@relaycc/receiver";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicExample />} />
      <Route path="dynamic" element={<DynamicExample />} />
      <Route path="custom" element={<CustomExample />} />
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
      <div className="push-to-bottom">
        <p>
          This example uses the default configuration, you can also try out{" "}
          <Link to="/dynamic">dynamic addresses</Link>
        </p>
      </div>
      <Intercom>
        <Window />
      </Intercom>
      <Launcher />
    </div>
  );
}

function DynamicExample() {
  const launch = useLaunch();

  return (
    <div className="full-flex-centered">
      <h1 className="header">Message Any Address!</h1>
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
      <div className="push-to-bottom">
        <p>
          You should also check out the{" "}
          <Link to="/">default configuration</Link>.
        </p>
      </div>
      <Intercom>
        <Window />
      </Intercom>
    </div>
  );
}

function CustomExample() {
  const launch = useLaunch();
  const isOpen = useIsOpen();
  const [position, setPosition] = useState<"modal" | "intercom">("intercom");

  return (
    <div className="custom">
      <h1 className="header">Receiver is customizable!</h1>
      <h1>For example, you could use it as a modal.</h1>
      <button
        className="launch-receiver hover-scale"
        onClick={() => {
          setPosition("modal");
          launch();
        }}
      >
        Modal
      </button>
      <h1>Or as an intercom widget.</h1>
      <button
        className="launch-receiver hover-scale"
        onClick={() => {
          setPosition("intercom");
          launch();
        }}
      >
        Intercom
      </button>

      <Modal isOpen={position === "modal" && isOpen}>
        <Window className="bordered" />
      </Modal>
      <Intercom isOpen={position === "intercom" && isOpen}>
        <Window />
      </Intercom>
    </div>
  );
}

export default App;
