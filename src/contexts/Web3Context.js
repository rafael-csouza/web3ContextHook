import { ethers } from 'ethers';
import { createContext, useContext, useEffect, useState } from 'react';
import { chainID } from './config';

const Web3Context = createContext();

export function useWeb3() {
  return useContext(Web3Context);
}

export function Web3Provider({ children }) {
  const [networkId, setNetworkId] = useState(null);
  const [signer, setSigner] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(null);
  const [status, setStatus] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setStatus('Loading');
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();
        console.log('network.chainId', network.chainId);
        console.log('chainID', chainID);
        if (network.chainId !== chainID) {
          setStatus('ErrorWrongNetwork');
          return;
        }
        const signer = provider.getSigner();
        const wallet = await signer.getAddress();
        const balance = await provider.getBalance(wallet);
        const balanceEth = ethers.utils.formatEther(balance);

        setSigner(signer);
        setNetworkId(network.chainId);
        setWallet(wallet);
        setBalance(balanceEth);
        setStatus('Connected');
      } catch (err) {
        console.error(err);
        setStatus('ErrorConnected');
      }
    } else {
      setStatus('ErrorMetamask');
    }
  };

  const networkChange = async () => {
    try {
      const expectedChainId = ethers.utils.hexValue(chainID);
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: expectedChainId }],
      });
      await connectWallet();
    } catch (err) {
      setStatus('ErrorWrongNetwork');
    }
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          connectWallet();
        } else {
          setStatus('NotConnected');
        }
      } else {
        setStatus('ErrorMetamask');
      }
    };

    if (typeof window.ethereum !== 'undefined') {
      checkWalletConnection();
    } else {
      setStatus('ErrorMetamask');
    }

    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', checkWalletConnection);
      window.ethereum.on('chainChanged', checkWalletConnection);
    }
    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.removeListener('accountsChanged', checkWalletConnection);
        window.ethereum.removeListener('chainChanged', checkWalletConnection);
      }
    };
  }, []);

  return (
    <Web3Context.Provider value={{ networkId, signer, wallet, balance, status, connectWallet, networkChange }}>
      {children}
    </Web3Context.Provider>
  );
}
