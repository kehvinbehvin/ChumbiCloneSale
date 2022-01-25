require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const NODE_PROVIDER_API_KEY = process.env.NODE_PROVIDER_API_KEY;
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// Contract abi
// To uncomment and insert <CONTRACT NAME>
const contract = require("../artifacts/contracts/<CONTRACT>.sol/<CONTRACT>.json");
console.log("Contract abi retrieved")

// Provider
// See available networks to choose from alchemy node modules
/// node_modules/@ethersproject/providers/src.ts/alchemy-provider.ts
const alchemyProvider = new ethers.providers.AlchemyProvider(network="maticmum", NODE_PROVIDER_API_KEY);
console.log("Alchemy connected")

// Signer
const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, alchemyProvider);
console.log("Signer connected to alchemy")

// Contract
// Uncomment and replace with your own contract
// const YourContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
console.log("Sale contract instantiated")

async function main() {
    try {
        // Uncomment and replace with your contract
        // const responseObject = await <YourContract>.method();
        // console.log(JSON.stringify(responseObject));

    } catch {
        console.log("Error with interacting with contract")
    };
}
main();