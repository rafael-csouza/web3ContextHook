export const testNet = true;
export const localWebsite = true;

// Mumbai Testnet or Polygon:
export const chainID = testNet ? 80001 : 137;

export const websiteExplorer = testNet ? 'https://mumbai.polygonscan.com' : 'https://polygonscan.com';
export const websiteUrl = testNet ? 'https://web3-context-hook.vercel.app/' : '';
export const chainCoin = testNet ? 'Mumbai Matic' : 'Matic';

export const alchemyUrl = testNet ? process.env.MUMBAI_ALCHEMY_URL : process.env.POLYGON_ALCHEMY_URL;

// ApiUrl Local or Online:
export const apiURL = localWebsite ? 'http://localhost:3000/api' : `${websiteUrl}/api`;
