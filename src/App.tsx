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
      {" "}
      <header className="header-with-link">
        View the open source code on
        <a
          href="https://github.com/relaycc/receiver"
          target="_blank"
          rel="noreferrer"
          style={{ display: "flex", alignItems: "center"}}
        >
          <svg
            viewBox="0 0 24 24"
            height={30}
            width={30}
            style={{ cursor: "pointer" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
            ></path>
          </svg>
        </a>
      </header>
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
      <header className="header-with-link">
        Relay Receiver is open source, check it out on
        <a
          href="https://github.com/relaycc/receiver"
          target="_blank"
          rel="noreferrer"
          style={{ display: "flex", alignItems: "center"}}
        >
          <svg
            viewBox="0 0 24 24"
            height={30}
            width={30}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
            ></path>
          </svg>
        </a>
      </header>
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
