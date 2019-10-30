# DeFi Dapp Start Kit

A Starter kit for Ethereum DeFi Dapps

(in-progress...)

## Frontend

* React
* React-router (TODO)
* Drizzle
* Rimble UI ? Material UI? (TODO)

## Smart contract

* Solidity 0.5
* Truffle 0.5
* Integrate with Dai (Integration with token done. TODO: Integration with CDP)
* Integrate with Compound (TODO)
* Integrate with Gnosis (TODO) 

## Contract Mocks

To develop locally, we need to mock all the DeFi contracts we interface
with. All the mocks are in `contract/mocks`.

To add mocks, you need to:

* Add mock in `contracts/mocks`
* Add deployment instructions in `migrations/2_deploy_contracts.js`
* Add contract to drizzle options in `app/src/drizzleOptions.js`

Sometime, the original contract is not ideal for a mock:

* Uncompatible Solidity versions
* Complex deployments, involving other contracts

In this case, you need to create a custom Mock. It will  need to have 
at least all the functions that you will use in your frontend. No
need to implement these functions.

## Dai

There are 2 integrations:

* with the Dai token
* with the Dai CDP (TODO)

The integration with the Dai token is straightforward. This is just a
standard ERC20 token, with all the usual functions (`transfer()`, `transferFrom()`, etc...).
