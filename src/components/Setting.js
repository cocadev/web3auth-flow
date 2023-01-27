import { useContext } from "react";
import { CHAIN_CONFIG } from "../config/chainConfig";
import { WEB3AUTH_NETWORK } from "../config/web3AuthNetwork";
import styles from "../styles/Home.module.css";
import { Web3AuthContext } from "../services/web3auth";

const Setting = ( setNetwork, setChain) => {
  const networkChangeHandler = (e) => {
    console.log("Settings", e.target.value);
    setNetwork(e.target.value);
  };

  const chainChangeHandler = (e) => {
    console.log("Settings", e.target.value);
    setChain(e.target.value);
  };
  const { provider } = useContext(Web3AuthContext);
  const isLoggedIn = provider !== null;

  return (
    <div className={styles.setting}>
      <div className={styles.row}>
        <label htmlFor="network" className={styles.label}>
          Web3Auth Network
        </label>
        <select id="network" onChange={networkChangeHandler} className={styles.select} disabled={isLoggedIn}>
          {Object.keys(WEB3AUTH_NETWORK).map((x) => {
            return (
              <option key={x} value={x}>
                {WEB3AUTH_NETWORK[x].displayName}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.row}>
        <label htmlFor="network" className={styles.label}>
          Blockchain
        </label>
        <select onChange={chainChangeHandler} className={styles.select} disabled={isLoggedIn}>
          {Object.keys(CHAIN_CONFIG).map((x) => {
            return (
              <option key={x} value={x}>
                {CHAIN_CONFIG[x].displayName}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Setting;
