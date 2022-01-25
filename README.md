ChumbiClone contract address 0xdafe19f72c63933a1cc501b3009149e963e97a81
FilSwan USDC testnet ERC20 contract address 0xe11a86849d99f524cac3e7a0ec1241828e332c62

Tests
- npx hardhat compile
- npx hardhat test

Pre-Deployment checks
- Node provider api url
- Etherscan/Polygonscan api key for verification
- Signer private key. eg: your metamask private key

Deployment flow
- npx hardhat compile
- npx hardhat run scripts/<deployment script> --network <your network> --constructor-args
- mumbai
    - npx hardhat run scripts/deploy.js --network polygon_mumbai
        - first deployment = 0x97692ab2db6a778a20e16674f464e4863044c4c0
        - second deployment = 0xd67b2cd77a4b49773d0a2443c08ab93e9c0b718d
            - This was the incorrect address provided by deploy.js = 0x117814AF22Cb83D8Ad6e8489e9477d28265bc105 (no idea why)
        - third deployment (ChumbiClone): incorrect address at 0xdAfe19f72c63933A1cC501B3009149e963E97A81,
            - real address at 0xdafe19f72c63933a1cc501b3009149e963e97a81
        - ChumbiCloneSale real address = 0x1878ce52fa7a71003987af6ca84627031d2a136f
          - incorrect address at 0x1878CE52Fa7a71003987AF6cA84627031d2A136F

Create .env file
- include your API KEY for which ever node provider you are using
- ensure you have 1 variable for the API_URL and one for the API_KEY for the service provider
- include your wallet private key
- Relevant packages: dotenv

Interacting with your contract
- npx hardhat run scripts/interact.js
- You need 3 things to interact with your smart contract
    1. Your node provider api_key
    2. Your wallet
    3. Your contract abi which will be used to retrieve your contract
- Relevant packages: ethers

Retrieving your contract address
- for some reason, the contract address being printed during deploy.js is not accurate.
- retrieving it using eth_getTransactionReceipt.contractAddress is the correct address. You can
- find this one your node provider.

Verifying Contract on Etherscan/Polygonscan
- npx hardhat verify --network polygon_mumbai --constructor-args arguments.js 0x1878ce52fa7a71003987af6ca84627031d2a136f
- Relevant packages: hardhat-etherscan