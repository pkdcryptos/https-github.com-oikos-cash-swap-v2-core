const { getTruffleConfig } = require('@opentron/java-tron-provider')

module.exports = {
  networks: {
    nile: getTruffleConfig('nile'),
    mainnet: getTruffleConfig('mainnet')
  },

  mocha: {},
  compilers: {
    solc: {}
  }
}
