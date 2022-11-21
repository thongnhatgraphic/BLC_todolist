require("@nomicfoundation/hardhat-toolbox");
const PRIVATE_KEY_BSC="db3b5f5feb316f1f7c130b50efabad145de965a80cdc4027dc54ce20217355f9"

const ETHERSCAN_API_KEY="G78B5B1WXVVQW2P2TREQFQ8UE148W8MVV1"
const BSC_API_KEY="RBW69DMFARCH9RV6VH4C8INREW95FZB4G8"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    bscchain: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      // https://data-seed-prebsc-1-s1.binance.org:8545/
      accounts: [PRIVATE_KEY_BSC]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.GOERLI_PRIVATE_KEY}`,
    }
  },
  etherscan: {
    apiKey: BSC_API_KEY,
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
