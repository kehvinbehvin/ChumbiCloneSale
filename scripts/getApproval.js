require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const USDC_TESTNET_CONTRACT_ADDRESS = process.env.USDC_TESTNET_CONTRACT_ADDRESS

const USDC_CONTRACT = ethers.getContractAt(USDC_TESTNET_CONTRACT_ADDRESS);

async function main() {
    try {
        const responseObject = await USDC_CONTRACT.approve(WALLET_ADDRESS,100);
        console.log(JSON.stringify(responseObject));
    } catch(error) {
        console.log(error)
        console.log("Error with interacting with contract")
    };
}
main();