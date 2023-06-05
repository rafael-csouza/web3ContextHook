# Web3Context Hook

The useWeb3 hook is a custom hook that provides access to Ethereum-related data and functionality in your React applications. It is designed to simplify the interaction with the Ethereum network and Metamask wallet.

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

// Access Ethereum-related data and functionality here

return (
// Your component JSX
);
}
```

The useWeb3 hook provides the following properties and functions:

networkId: The ID of the connected Ethereum network.
signer: The Ethereum signer object associated with the connected wallet.
wallet: The address of the connected wallet.
balance: The balance of the connected wallet in Ether.
status: The status of the connection (e.g., "Loading", "NotConnected", "Connected").
connectWallet: A function to connect the wallet and retrieve Ethereum-related data.
networkChange: A function to handle network changes and update the connection accordingly.
By using these properties and functions, you can display the Ethereum-related data in your components, handle wallet connections, and react to network changes.

Note: Make sure to handle error cases appropriately and provide a user-friendly experience in case of errors or connection issues.

## Example

Here's an example of how you can use the useWeb3 hook in your application:

```javascript
import { useWeb3 } from './contexts/Web3Context';

function MyComponent() {
  const { networkId, wallet, balance, status, connectWallet } = useWeb3();

  return (
    <div>
      <p>Network ID: {networkId}</p>
      <p>Wallet: {wallet}</p>
      <p>Balance: {balance}</p>

      {status === 'NotConnected' && <button onClick={connectWallet}>Connect Wallet</button>}

      {/* Other component UI */}
    </div>
  );
}
```

In this example, we display the network ID, wallet address, and balance of the connected wallet. If the status is "NotConnected", we render a button to allow the user to connect their wallet.

Feel free to customize the UI and functionality based on your application's requirements.

## Conclusion

The useWeb3 hook provided by the Web3Provider allows you to easily integrate Ethereum functionality into your React applications. By leveraging the Ethereum-related data and functions, you can build decentralized applications and interact with the Ethereum network with ease.
