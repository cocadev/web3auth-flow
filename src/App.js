import "./App.css";
import { useState } from "react";
import styles from "./styles/Home.module.css";
import { Web3AuthProvider } from "./services/web3auth";
import Setting from "./components/Setting";
import Main from "./components/Main";

function App() {
  const [web3AuthNetwork, setWeb3AuthNetwork] = useState("mainnet");
  const [chain, setChain] = useState("mainnet");

  return (
    <div className={styles.container}>
      <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
        <h1 className={styles.title}>
          <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
            Web3Auth
          </a>{" "}
          & Demo
        </h1>
        <Setting setNetwork={setWeb3AuthNetwork} setChain={setChain} />
        <Main />
      </Web3AuthProvider>
    </div>
  );
}

export default App;
