
# KryptoRaise

 A blockchain-based crowdfunding application developed as part of a collaborative project for "Solving for India
Hackathon 2023".
## 📄Index

- [About](#about-the-project)
  - [Built With](#built-with)
  - [Methodology](#methodology)
- [Setting up the Project](#setting-up-the-project)
  - [Pre-Requisites](#prerequisites)
  - [Running the Project](#running-the-project)
- [Result](#result)
- [Contributions](#contributions)


 ## About The Project

 KryptoRaise is a blockchain-based crowdfunding application which enables secure,transparent and decentralized funding of projects eliminating intermediaries and offering trustworthy transactions through blockchain technology.


### Built With

Following technologies and libraries are used for the development of this project.

- [React](https://reactjs.org/)
- [Solidity](https://soliditylang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ethers](https://ethers.org/)
- [ThirdWeb](https://thirdweb.com/)
- [Hardhat](https://hardhat.org/)

### Methodology

- ***Choosing the Blockchain Platform:*** Considering factors such as scalability, security, cost and developer community support we chose Ethereum as our blockchain     
  platform.

- ***Developing Smart Contracts:*** Developed smart contracts using Solidity programming language. Smart contracts have functionality such as creating new campaigns,  
  funding campaigns, and releasing funds when a campaign reaches its funding goal.

- ***Deploying and testing the Smart Contracts:*** Deployed and tested smart contracts on the Polygon Mumbai Testnet using Thirdweb. 

- ***Building the Front-End Using Reactjs:*** Developed the front-end of the application using Reactjs. Frontend includes a user interface for creating campaigns,    
  funding 
  campaigns, sharing campaigns, searching a particular campaign, viewing all campaigns,  viewing campaigns category-wise  and viewing campaign status.

- ***Connecting the Front-End to Contract using Ether.js:*** Connected the front-end with the smart contracts using Ether.js, which is a JavaScript library that allows   
  you to interact with the Ethereum network.

- ***Testing the Application:*** Tested the application thoroughly to ensure it works as intended. We Used  Polygon Mumbai Testnet to test the application.

- ***Deploying the Application:*** Successfully deployed our Application on the Google Cloud Platform using the AMD instance.



## Setting up the Project

Follow the steps below to setup the project

### Prerequisites

- Install and Setup Metamask extension in your browser
- Add Polygon Mumbai testnet. Refer [here](https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f) 

### Running the project


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

## Result
During the development phase of our blockchain-based crowdfunding platform, we focused on ensuring that the platform was secure, stable, and user-friendly. Here are some of the key results achieved during this phase:

- **Successful deployment on the Google Cloud Platform using the  AMD instance:** We successfully deployed our platform on the Google cloud using the AMD instance, which allowed us to test the platform in a safe and controlled environment.

- **Testing of key features:** We tested several key features of our platform, including the creation of campaigns, display campaign category wise,ability to contribute funds, and the integration with MetaMask and the Matic network. We also tested the platform's security features, including its encryption algorithms and user authentication procedures.

- **Identification and resolution of bugs:** During the development, we identified and resolved several bugs and issues, including issues with the user interface, search engine and issues with transaction processing. These bugs were promptly resolved, ensuring that the platform was stable and secure for users.


## Contributions
- [Aayush](https://github.com/aayushbisht)
  - Developed complete backend
  - Designed Navbar and Sidebar UI
  - Designed and coded Display Campaign Section
  - Made the website responsive
  - Helped with GCP deployment
  - Created project video
  - Authored project's README file

- [Harshul](https://github.com/harshul02)
  - Developed frontend
  - Designed and coded Dashbord
  - Added Share Buttons
  - Added functionality to start campaign and connect button
  - GCP deployment
  - Project Documentation

- [Shravan](https://github.com/shravan-das)
  - Developed frontend
  - Designed and coded campaign and profile section
  - Implemented Search functionality
  - Coded the functionality of Sidebar
  - Added functionality to hamburger category section
  - Project Documentation








 

 

