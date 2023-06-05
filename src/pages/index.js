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
