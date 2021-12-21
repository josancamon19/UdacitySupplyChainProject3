const HDWalletProvider = require('@truffle/hdwallet-provider');
const {
  projectId,
  mnemonic
} = require('./secrets.json');


module.exports = {
  settings: {
    optimizer: {
      enabled: true,
      runs: 1
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `wss://rinkeby.infura.io/ws/v3/${projectId}`),
      networkCheckTimeout: 10000,
      network_id: 4,
      confirmations: 2,
      timeoutBlocks: 200,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};