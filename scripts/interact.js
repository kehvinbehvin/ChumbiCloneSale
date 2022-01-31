require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const NODE_PROVIDER_API_KEY = process.env.NODE_PROVIDER_API_KEY;
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY;
const CHUMBICLONESALE_CONTRACT_ADDRESS = process.env.CHUMBICLONESALE_CONTRACT_ADDRESS;

// Contract abi
// To uncomment and insert <CONTRACT NAME>
const contract = require("../artifacts/contracts/ChumbiCloneSale.sol/ChumbiCloneSale.json");
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
const ChumbiCloneSale = new ethers.Contract(CHUMBICLONESALE_CONTRACT_ADDRESS, contract.abi,  signer);
console.log("ChumbiCloneSale contract instantiated")

async function main() {
    try {
        const responseObject = await ChumbiCloneSale.purchase(1);
        console.log(JSON.stringify(responseObject));
    } catch(error) {
        console.log(error)
        console.log("Error with interacting with contract")
    };
}
main();