//'https://eth-ropsten.alchemyapi.io/v2/IbO7VGBaqRkSvp2nVDc1eUUelXp2MICW'

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/IbO7VGBaqRkSvp2nVDc1eUUelXp2MICW',
      accounts: [ '289695f1a93deaeb8ea01262e992e74b4faa561e0afca18a2f9a3896d52accfd' ]
    }
  }
}