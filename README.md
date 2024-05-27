# emoney-transfer-contracts

Smart contracts for the e-money transfer POC

## Configuring the network

Networks are configured inside `truffle-config.js` file. Example:

```javascript
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, nodeServiceApiKey),
      network_id: 11155111,
      gas: 4500000,
      gasPrice: 10000000000,
    },
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

```

For it to work, you need a `secrets.json` file:

```json
{
  "mnemonic": "drama film snack motion ...",
  "alchemyApiKey": "JPV2..."
}
```

To test the contract, just run:

```bash
$ npx truffle console --network sepolia
truffle(sepolia)> accounts
[ '0xEce6999C6c5BDA71d673090144b6d3bCD21d13d4',
  '0xC1310ade58A75E6d4fCb8238f9559188Ea3808f9',
...
```

## Deployment on a testnet

To deploy the contracts to a public testnet, just run:

`npx truffle migrate --network <your-network-name>`

This will deploy all contracts inside `migrations` folder.

## More info

- More info on [OpenZeppelin docs](https://docs.openzeppelin.com/learn/connecting-to-public-test-networks)
