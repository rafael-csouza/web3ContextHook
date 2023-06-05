import { useWeb3 } from '../contexts/Web3Context';

export default function HomePage() {
  const { networkId, signer, wallet, balance, status, connectWallet, networkChange } = useWeb3();
  console.log('networkId:', networkId);
  console.log('signer:', signer);
  console.log('wallet:', wallet);
  console.log('balance:', balance);
  console.log('status:', status);

  return (
    <>
      <h1 className='mb-4 text-3xl font-bold'>DApp Sample</h1>
      {status === 'Loading' && <p>Carregando</p>}
      {status === 'NotConnected' && (
        <>
          <button
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
          Not Connected.
        </>
      )}
      {status === 'ErrorConnected' && (
        <>
          <button
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
            onClick={connectWallet}
          >
            Connect
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

      {status === 'ErrorMetamask' && <div>Not have Metamask.</div>}

      {status === 'Connected' && (
        <>
          <p>Wallet: {wallet}</p>
          <p>Balance: {balance}</p>
        </>
      )}
    </>
  );
}
