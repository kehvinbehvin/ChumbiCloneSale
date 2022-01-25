require('dotenv').config();

const { CHUMBI_CONTRACT_ADDRESS, USDC_TESTNET_CONTRACT_ADDRESS } = process.env;


module.exports = [
    CHUMBI_CONTRACT_ADDRESS,
    USDC_TESTNET_CONTRACT_ADDRESS,
    ["200000000000000000","200000000000000000","200000000000000000","200000000000000000"],
    ["https://google.com","https://yahoo.com","https://facebook.com","https://tiktok.com"],
    5,
];