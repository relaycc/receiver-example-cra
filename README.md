# Relay Receiver Example App

This app was bootstrapped with
[create-react-app](https://create-react-app.dev/). See the `create-react-app`
docs for installation, starting a dev server, etc.

# Config

Starting the app in dev mode _requires_ zero config, but sometimes it gets tiresome
repeatedly clicking the "connect wallet" button and the XMTP sign message
prompt. To make that process smoother in dev mode, you can use an env var:

**WARNING: DO NOT USE YOUR PERSONAL WALLET'S PRIVATE KEY HERE. USE A BURNER WALLET OR TEST-SPECIFIC WALLET INSTEAD. SEE HERE FOR ONE OPTION TO CREATE A BURNER WALLET: https://docs.ethers.io/v5/api/signer/#Wallet-createRandom https://docs.ethers.io/v5/api/signer/#Wallet-createRandom**

```
export REACT_APP_TEST_PK='A BURNER WALLETS PK'
```
