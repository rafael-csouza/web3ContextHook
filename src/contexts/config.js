export const testNet = true;
export const localWebsite = true;

// Contract ABI

// Mumbai Testnet or Polygon:
export const chainID = testNet ? 80001 : 137;

export const websiteExplorer = testNet ? 'https://mumbai.polygonscan.com' : 'https://polygonscan.com';
export const websiteUrl = testNet ? 'https://gangnft.vercel.app' : '';

export const websiteOpensea = testNet
  ? 'https://testnets.opensea.io/assets/mumbai'
  : 'https://opensea.io/assets/polygon';

export const alchemyUrl = testNet ? process.env.MUMBAI_ALCHEMY_URL : process.env.POLYGON_ALCHEMY_URL;

// ApiUrl Local or Online:
export const apiURL = localWebsite ? 'http://localhost:3000/api' : `${websiteUrl}/api`;
