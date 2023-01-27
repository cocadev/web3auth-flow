import { CHAIN_NAMESPACES } from "@web3auth/base";

export const CHAIN_CONFIG = {
  ethereum: {
    displayName: "Ethereum",
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x1",
    rpcTarget: `https://rpc.ankr.com/eth`,
    blockExplorer: "https://etherscan.io/",
    ticker: "ETH",
    tickerName: "Ethereum",
  },
  polygon: {
    displayName: "Polygon",
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x89",
    rpcTarget: "https://polygon-rpc.com",
    blockExplorer: "https://polygonscan.com/",
    ticker: "matic",
    tickerName: "Matic",
  },
  goerli: {
    displayName: 'Goerli',
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x5',
    rpcTarget: 'https://rpc.ankr.com/eth_goerli',
    blockExplorer: 'https://goerli.etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  },
  mumbai: {
    displayName: "Mumbai",
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x13881",
    rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
    blockExplorer: "https://mumbai.polygonscan.com/",
    ticker: "MATIC",
    tickerName: "MATIC",
  },
};