
# KryptoRaise

 A blockchain-based crowdfunding application developed as part of a collaborative project for "Solving for India
Hackathon 2023".

 ## ℹ️ About The Project

 KryptoRaise is a blockchain-based crowdfunding application which enables secure,transparent and decentralized funding of projects eliminating intermediaries and offering trustworthy transactions through blockchain technology.


### 🛠️ Built With

Following technologies and libraries are used for the development of this project.

- [React](https://reactjs.org/)
- [Solidity](https://soliditylang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ethers](https://ethers.org/)
- [ThirdWeb](https://thirdweb.com/)
- [Hardhat](https://hardhat.org/)

## 📌 Getting Started

Follow the steps below to setup the project

### 💻 Prerequisites

- Install and Setup Metamask extension in your browser
- Add Polygon Mumbai testnet. Refer [here](https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f) 

### 🤖 Running the project.


1. **Fork** and **clone** the project to your local system
2.  `cd` into `client` and `web3` directory and run:

```
npm i
```

3. Now get the private key of you Mumbai testnet account from Metamask and set it in `web3/.env` file:
```
PRIVATE_KEY = your key
```
4. To deploy the smart contract, in `web3` directory run the command:
```
npm run deploy
```
Follow the link, deploy the contract and copy the deployed address

5. In `client/src/context/index.jsx` paste the address here:

```
  const { contract } = useContract('your address');
```
6. Finally in `client` use command:
```
npm run dev
```






 

 

