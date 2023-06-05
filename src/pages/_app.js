import { Roboto_Mono } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Web3Provider } from '../contexts/Web3Context';
import '../styles/global.css';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>web3ContextHook</title>
        <meta
          name='description'
          content='The web3ContextHook provided allows you to easily integrate EVM functionality into your React JS / Next JS applications. By leveraging the EVM data and functions, you can build decentralized applications and interact with the EVMs network with ease.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        <meta name='msapplication-TileColor' content='#059669' />
        <meta name='theme-color' content='#059669' />
      </Head>

      <Web3Provider>
        <div lang='en' className={roboto_mono.className}>
          <div className='flex min-h-screen flex-col'>
            <header className='flex justify-center bg-gray-800 p-4 text-white'>
              <Link href='/'>
                <Image
                  className='rounded-xl'
                  src='/OpenSeaBackgroundClub.jpg'
                  alt='Logo'
                  width={400}
                  height={100}
                  quality={100}
                  priority
                />
              </Link>
            </header>
            <main className='flex-1 bg-gray-100 p-4 text-center'>
              <div className='flex flex-col items-center justify-center'>
                <Component {...pageProps} />
              </div>
            </main>
            <footer className='flex justify-center bg-gray-800 p-4 text-white'>
              <Link href='/'>
                <Image className='rounded-xl' src='/favicon.ico' alt='Favicon' width={50} height={50} />
              </Link>
            </footer>
          </div>
        </div>
      </Web3Provider>
    </>
  );
}
