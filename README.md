# Web3Context Hook

The useWeb3 hook is a custom hook that provides access to Ethereum-related data and functionality in your React applications. It is designed to simplify the interaction with the Ethereum network and Metamask wallet.

[Online Website: https://web3-context-hook.vercel.app/](https://web3-context-hook.vercel.app/)

## Usage

To use the useWeb3 hook, you need to wrap your application or component with the Web3Provider component. This component sets up the necessary context and makes the useWeb3 hook available for use.

```javascript
import { Web3Provider } from './contexts/Web3Context';

function App() {
  return <Web3Provider>{/_ Your app components _/}</Web3Provider>;
}
```

Once the Web3Provider is set up, you can use the useWeb3 hook to access Ethereum-related data and functions in your components.

```javascript
import { useWeb3 } from './contexts/Web3Context';

function MyComponent() {
const { networkId, signer, wallet, balance, status, connectWallet, networkChange } = useWeb3();

// Access EVM data and functionality here

return (
// Your component JSX
);
}
```

The useWeb3 hook provides the following properties and functions:

networkId: The ID of the connected EVM network.
signer: The EVM signer object associated with the connected wallet.
wallet: The address of the connected wallet.
balance: The balance of the connected wallet in Ether.
status: The status of the connection (e.g., "Loading", "NotConnected", "Connected").
connectWallet: A function to connect the wallet and retrieve EVM data.
networkChange: A function to handle network changes and update the connection accordingly.
By using these properties and functions, you can display the EVM data in your components, handle wallet connections, and react to network changes.

Note: Make sure to handle error cases appropriately and provide a user-friendly experience in case of errors or connection issues.

## Example

Here's an example of how you can use the useWeb3 hook in your application:

```javascript
import Link from 'next/link';
import { useWeb3 } from '../contexts/Web3Context';
import { chainCoin, websiteExplorer } from '../contexts/config';

export default function HomePage() {
  const { networkId, signer, wallet, balance, status, connectWallet, networkChange } = useWeb3();
  console.log('networkId:', networkId);
  console.log('signer:', signer);
  console.log('wallet:', wallet);
  console.log('balance:', balance);
  console.log('status:', status);

  return (
    <>
      <h1 className='mb-4 text-3xl font-bold underline'>web3ContextHook</h1>
      {status === 'Loading' && <p>Loading...</p>}
      {status === 'NotConnected' && (
        <>
          <button
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
          Not connected.
        </>
      )}
      {status === 'ErrorConnected' && (
        <>
          <button
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
          User rejected the request.
        </>
      )}

      {status === 'ErrorWrongNetwork' && (
        <>
          <button
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
            onClick={networkChange}
          >
            Change Network
          </button>
          Wrong network.
        </>
      )}

      {status === 'ErrorMetamask' && <div>Has no metamask.</div>}

      {status === 'Connected' && (
        <div className='flex flex-col gap-2'>
          <div className='rounded-xl bg-gray-400 p-2'>
            <p>Wallet</p>
            <p className='text-xs md:text-base'>{wallet}</p>
          </div>
          <div className='rounded-xl bg-gray-400 p-2'>
            <p>Balance</p>
            <p className='text-xs md:text-base'>
              {Number(balance).toFixed(2)} {chainCoin}
            </p>
          </div>
          <Link href={`${websiteExplorer}/address/${wallet}`} target='_blank'>
            <button className='rounded bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-600 md:text-base'>
              {websiteExplorer}
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
```

In this example, we display the network ID, wallet address, and balance of the connected wallet. If the status is "NotConnected", we render a button to allow the user to connect their wallet. Additionally, we handle cases for "ErrorConnected" where the user rejected the request, "ErrorWrongNetwork" where the user can change the network, and "ErrorMetamask" where the user doesn't have Metamask installed.

Feel free to customize the UI and functionality based on your application's requirements.

## Librarys

next (version 13.4.4): The Next.js framework for building React apps with server-side rendering.
react (version 18.2.0): The React library for creating user interfaces.
ethers (version 5.4.0): A library for interacting with smart contracts and performing operations on the Ethereum network.
tailwindcss (version 3.3.2): A highly customizable and responsive CSS utility library.

## config.js (src/contexts/config.js)

The config.js file contains some settings used in the project:

testNet: A boolean variable that indicates whether the project is configured to use a test network. If true, the project is configured for the testnet. Otherwise it is set to the main network.
localWebsite: A Boolean variable that indicates whether the project is running locally. If true, it means the project is running locally. Otherwise it is running online.
chainID: A constant that defines the chain ID (chain ID) based on the testNet and localWebsite variables. If testNet is true, the chain ID is set to the Mumbai testnet (80001). Otherwise it will be set to the main Polygon network (137).
websiteExplorer: A constant that defines the URL of the network block explorer based on the testNet variable. If testNet is true, the URL is set to the Mumbai testnet block explorer. Otherwise, it will be set to the Polygon mainnet block explorer.
websiteUrl: A constant that defines the website URL based on the testNet variable. If testNet is true, the URL is set to the test site URL. Otherwise it will be set to an empty string.
alchemyUrl: A constant that defines the URL for Alchemy to interact with the Ethereum network based on the testNet variable. If testNet is true, the URL is set to the Alchemy URL for the Mumbai testnet. Otherwise it will be set to the Alchemy URL for the Polygon mainnet.
apiURL: A constant that defines the API URL based on the localWebsite variable. If localWebsite is true, the URL is set to the local API at http://localhost:3000/api. Otherwise, it will be set to the online API at ${websiteUrl}/api.

## Conclusion

The web3ContextHook allows you to easily integrate EVM functionality into your React JS / Next JS applications. By leveraging the EVM data and functions, you can build decentralized applications and interact with the EVMs network with ease.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
