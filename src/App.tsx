import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Receiver, FixedLaunch } from '@relaycc/receiver';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Receiver>
          <FixedLaunch peerAddress="0x45C9a201e2937608905fEF17De9A67f25F9f98E0"/>
        </Receiver>
      </header>
    </div>
  );
}

export default App;
